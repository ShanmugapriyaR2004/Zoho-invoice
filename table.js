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
            <td><input type="text" value="Enter item name/description" class="item-description"></td>
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

    updateSubTotal(); // Initial calculation of Sub Total
});
