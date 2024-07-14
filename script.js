document.addEventListener('DOMContentLoaded', function() {
    
    const inputFields = document.querySelectorAll('input[type="text"], input[type="number"], input[type="date"], textarea');

   
    inputFields.forEach(function(input) {
        input.classList.add('initial-background');
    });

   
    setTimeout(function() {
        inputFields.forEach(function(input) {
            input.classList.remove('initial-background');
        });
    }, 1000); 
});




document.getElementById('uploadImage').onclick = function() {
    document.getElementById('fileInput').click();
};

document.getElementById('fileInput').onchange = function(event) {
    const file = event.target.files[0];
    if (file) {
        
        if (file.size > 1024 * 1024) {
            alert('File size exceeds 1MB. Please select a smaller file.');
            return;
        }

        
        const img = new Image();
        img.onload = function() {
           
            if (this.width !== 240 || this.height !== 240) {
                alert('Image dimensions must be exactly 240x240 pixels.');
                return;
            }
            
            
            const dpi = Math.round((this.naturalWidth / this.width) * 72);
            if (dpi !== 72) {
                alert('Image DPI must be 72.');
                return;
            }
            
            
            
            const uploadBox = document.getElementById('uploadBox');
            uploadBox.innerHTML = `
                <img src="${URL.createObjectURL(file)}" alt="Uploaded Image" width="240" height="240">
                <div>
                    <button id="changeImage">Change</button>
                    <button id="deleteImage">Delete</button>
                </div>
            `;
            
            
            document.getElementById('changeImage').onclick = function() {
                document.getElementById('fileInput').click();
            };
            
            document.getElementById('deleteImage').onclick = function() {
                uploadBox.innerHTML = `
                    <input type="file" id="fileInput" accept="image/*" style="display: none;">
                    <button id="uploadImage">Upload Image</button>
                `;
            };
        };
        
        
        img.src = URL.createObjectURL(file);
    }
};

document.getElementById('state').onclick = function() {
    const stateDropdown = document.querySelector('.state-dropdown');
    
   
    const select = document.createElement('select');
    select.id = 'stateSelect';

    
    select.style.width = '45%';
    select.style.height = '50px';
    select.style.marginTop = '1%';
    select.style.marginLeft = '1%';
    select.style.padding = '2%';
    select.style.border = ' 1px solid #007BFF';
    select.style.outline = 'none';
    select.style.borderRadius = '5px';
    select.style.cursor = 'pointer';


   
    const states = [
        "Andaman and Nicobar Islands",
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chandigarh",
        "Chhattisgarh",
        "Dadra and Nagar Haveli",
        "Daman and Diu",
        "Delhi",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Lakshadweep",
        "Madhya Pradesh"
        
    ];

    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        select.appendChild(option);
    });

    
    stateDropdown.appendChild(select);

  
    document.getElementById('state').style.display = 'none';

    
    select.style.display = 'block';

   
    select.onchange = function() {
        document.getElementById('state').value = this.value;
        document.getElementById('state').style.display = 'block';
        select.remove();
    };
};
document.getElementById('country').onclick = function() {
    const countryDropdown = document.querySelector('.country-dropdown');
    
    
    const select = document.createElement('select');
    select.id = 'countrySelect';

    
    select.style.width = '50%';
    select.style.height = '50px';
    select.style.marginTop = '1%';
    select.style.marginLeft = '1%';
    select.style.padding = '2%';
    select.style.border = ' 1px solid #007BFF';
    select.style.outline = 'none';
    select.style.borderRadius = '5px';
    select.style.cursor = 'pointer';

    
    const countries = [
        "India",
        "United States",
        "United Kingdom",
        "Canada",
        "Australia",
        
    ];

    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        select.appendChild(option);
    });

   
    countryDropdown.appendChild(select);

    
    document.getElementById('country').style.display = 'none';

    
    select.style.display = 'block';

    
    select.onchange = function() {
        document.getElementById('country').value = this.value;
        document.getElementById('country').style.display = 'block';
        select.remove();
    };
};






document.getElementById('client-state').onclick = function() {
    const stateDropdown = document.querySelector('.state-dropdown1');
    
    
    const select = document.createElement('select');
    select.id = 'stateSelect';

    
    select.style.width = '75%';
    select.style.height = '50px';
    select.style.marginTop = '1%';
    select.style.marginLeft = '1%';
    select.style.padding = '2%';
    select.style.border = ' 1px solid #007BFF';
    select.style.outline = 'none';
    select.style.borderRadius = '5px';
    select.style.cursor = 'pointer';


    
    const states = [
        "Andaman and Nicobar Islands",
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chandigarh",
        "Chhattisgarh",
        "Dadra and Nagar Haveli",
        "Daman and Diu",
        "Delhi",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Lakshadweep",
        "Madhya Pradesh"
       
    ];

    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        select.appendChild(option);
    });

    
    stateDropdown.appendChild(select);

    
    document.getElementById('client-state').style.display = 'none';

   
    select.style.display = 'block';

    
    select.onchange = function() {
        document.getElementById('client-state').value = this.value;
        document.getElementById('client-state').style.display = 'block';
        select.remove();
    };
};
document.getElementById('client-country').onclick = function() {
    const countryDropdown = document.querySelector('.country-dropdown1');
    
    
    const select = document.createElement('select');
    select.id = 'countrySelect';

    
    select.style.width = '90%';
    select.style.height = '50px';
    select.style.marginTop = '1%';
    select.style.marginLeft = '1%';
    select.style.padding = '2%';
    select.style.border = ' 1px solid #007BFF';
    select.style.outline = 'none';
    select.style.borderRadius = '5px';
    select.style.cursor = 'pointer';


    const countries = [
        "India",
        "United States",
        "United Kingdom",
        "Canada",
        "Australia",
        
    ];

    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        select.appendChild(option);
    });

    
    countryDropdown.appendChild(select);

   
    document.getElementById('client-country').style.display = 'none';

   
    select.style.display = 'block';

   
    select.onchange = function() {
        document.getElementById('client-country').value = this.value;
        document.getElementById('client-country').style.display = 'block';
        select.remove();
    };
};



document.getElementById('supply-state').onclick = function() {
    const stateDropdown = document.querySelector('.state-dropdown2');
    
    
    const select = document.createElement('select');
    select.id = 'stateSelect';

    
    select.style.width = '110%';
    select.style.height = '50px';
    select.style.marginTop = '1%';
    select.style.marginLeft = '1%';
    select.style.padding = '2%';
    select.style.border = ' 1px solid #007BFF';
    select.style.outline = 'none';
    select.style.borderRadius = '5px';
    select.style.cursor = 'pointer';


   
    const states = [
        "Andaman and Nicobar Islands",
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chandigarh",
        "Chhattisgarh",
        "Dadra and Nagar Haveli",
        "Daman and Diu",
        "Delhi",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Lakshadweep",
        "Madhya Pradesh"
        
    ];

    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        select.appendChild(option);
    });

    
    stateDropdown.appendChild(select);

    
    document.getElementById('supply-state').style.display = 'none';

    
    select.style.display = 'block';

    
    select.onchange = function() {
        document.getElementById('supply-state').value = this.value;
        document.getElementById('supply-state').style.display = 'block';
        select.remove();
    };
};

const today = new Date().toISOString().split('T')[0];
document.getElementById('invoice-date').value = today;
document.getElementById('due-date').value = today;


document.addEventListener('DOMContentLoaded', function () {
    const invoiceTable = document.getElementById('invoiceTable').getElementsByTagName('tbody')[0];
    const addRowButton = document.getElementById('addRow');
    const subTotalCell = document.getElementById('subTotal');
    const totalCell = document.getElementById('total');

    function calculateRowAmount(row) {
        const qty = parseFloat(row.querySelector('.qty').value) || 0;
        const rate = parseFloat(row.querySelector('.rate').value) || 0;
        const sgst = parseFloat(row.querySelector('.sgst').value) || 0;
        const cgst = parseFloat(row.querySelector('.cgst').value) || 0;
        const cess = parseFloat(row.querySelector('.cess').value) || 0;
        return qty * rate + sgst + cgst + cess;
    }

    function updateAmount(row) {
        const amount = calculateRowAmount(row).toFixed(2);
        row.querySelector('.amount').textContent = amount;
        updateSubTotal();
    }

    function updateSubTotal() {
        let subTotal = 0;
        const rows = invoiceTable.getElementsByTagName('tr');
        for (let row of rows) {
            subTotal += parseFloat(row.querySelector('.amount').textContent) || 0;
        }
        subTotalCell.textContent = subTotal.toFixed(2);
        totalCell.textContent = subTotal.toFixed(2);
    }

    function addRow() {
        const newRow = invoiceTable.insertRow();
        newRow.innerHTML = `
            <td><textarea  class="item-description">Enter item name/description</textarea></td>
            <td><input type="number" value="1" class="qty" min="0"></td>
            <td><input type="text" value="0.00" class="rate"></td>
            <td><input type="number" value="0.00" class="sgst" min="0" step="0.01"></td>
            <td><input type="number" value="0.00" class="cgst" min="0" step="0.01"></td>
            <td><input type="number" value="0.00" class="cess" min="0" step="0.01"></td>
            <td>
                <span class="amount">0.00</span>
                <span class="remove-row">✖</span>
            </td>
        `;
        newRow.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', () => updateAmount(newRow));
        });
        newRow.querySelector('.remove-row').addEventListener('click', () => {
            newRow.remove();
            updateSubTotal();
        });
    }

    invoiceTable.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => updateAmount(input.closest('tr')));
    });

    invoiceTable.querySelectorAll('.remove-row').forEach(removeBtn => {
        removeBtn.addEventListener('click', function () {
            this.closest('tr').remove();
            updateSubTotal();
        });
    });

    addRowButton.addEventListener('click', addRow);

    updateSubTotal(); 
});
document.getElementById('currencySymbol').onclick = function() {
    const totalAmountContainer = document.getElementById('totalAmountContainer');
    
   
    const select = document.createElement('select');
    select.id = 'currencySelect';

    
    select.style.width = '55px';
    select.style.height = '25px';
    select.style.marginRight = '1px';
    select.style.fontSize = '10px';
    select.style.border = '1px solid black';
    select.style.outline = 'none';
    select.style.borderRadius = '5px';
    select.style.cursor = 'pointer';

    
    const currencies = [
        { symbol: '₹', name: 'INR' },
        { symbol: '$', name: 'USD' },
        { symbol: '€', name: 'EUR' },
        { symbol: '£', name: 'GBP' },
       
    ];

    currencies.forEach(currency => {
        const option = document.createElement('option');
        option.value = currency.symbol;
        option.textContent = `${currency.symbol} (${currency.name})`;
        select.appendChild(option);
    });

    
    totalAmountContainer.insertBefore(select, document.getElementById('total'));

   
    document.getElementById('currencySymbol').style.display = 'none';

   
    select.style.display = 'block';

    
    select.onchange = function() {
        document.getElementById('currencySymbol').textContent = this.value;
        document.getElementById('currencySymbol').style.display = 'inline';
        select.remove();
    };
};

function updateTotals() {
    let subTotal = 0;
    let sgstTotal = 0;
    let cgstTotal = 0;

    document.querySelectorAll('#invoiceTable tbody tr').forEach(row => {
        const qty = parseFloat(row.querySelector('.qty').value) || 0;
        const rate = parseFloat(row.querySelector('.rate').value) || 0;
        const sgst = parseFloat(row.querySelector('.sgst').value) || 0;
        const cgst = parseFloat(row.querySelector('.cgst').value) || 0;

        const amount = qty * rate;
        row.querySelector('.amount').textContent = amount.toFixed(2);

        subTotal += amount;
        sgstTotal += amount * (sgst / 100);
        cgstTotal += amount * (cgst / 100);
    });

    document.getElementById('subTotal').textContent = subTotal.toFixed(2);

    if (sgstTotal > 0 || cgstTotal > 0) {
        document.getElementById('sgstRow').style.display = '';
        document.getElementById('cgstRow').style.display = '';
        document.getElementById('sgstTotal').textContent = sgstTotal.toFixed(2);
        document.getElementById('cgstTotal').textContent = cgstTotal.toFixed(2);
    } else {
        document.getElementById('sgstRow').style.display = 'none';
        document.getElementById('cgstRow').style.display = 'none';
    }

    document.getElementById('total').textContent = (subTotal + sgstTotal + cgstTotal).toFixed(2);
}


document.querySelectorAll('#invoiceTable tbody input').forEach(input => {
    input.addEventListener('input', updateTotals);
});


updateTotals();


