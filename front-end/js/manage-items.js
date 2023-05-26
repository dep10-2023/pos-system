const tbodyElm = $("#tbl-items tbody");
const modalElm = $("#new-customer-modal")
const txtCode = $("#txt-code");
const txtDescription = $("#txt-description");
const txtUnitPrice = $("#txt-unit-price");
const txtStock = $("#txt-stock");
const btnSave = $("#btn-save");

// txtStock.css("background-color","red");
tbodyElm.empty();
function formatCustomerId(id) {
    return `I${id.toString().padStart(3, '0')}`;
}
btnSave.on('click', () => {
    if (!validateData()) {
        return false;
    }

    const id = txtCode.val().trim();
    const description = txtDescription.val().trim();
    const contact = txtContact.val().trim();
    const address = txtAddress.val().trim();

    let item = {
        description, description, unitPrice
    };


});

function validateData() {
    const address = txtAddress.val().trim();
    const contact = txtContact.val().trim();
    const name = txtDescription.val().trim();
    let valid = true;
    resetForm();

    if (!address) {
        valid = invalidate(txtAddress, "Address can't be empty");
    } else if (!/.{3,}/.test(address)) {
        valid = invalidate(txtAddress, 'Invalid address');
    }

    if (!contact) {
        valid = invalidate(txtContact, "Contact number can't be empty");
    } else if (!/^\d{3}-\d{7}$/.test(contact)) {
        valid = invalidate(txtContact, 'Invalid contact number');
    }

    if (!name) {
        valid = invalidate(txtName, "Name can't be empty");
    } else if (!/^[A-Za-z ]+$/.test(name)) {
        valid = invalidate(txtName, "Invalid name");
    }

    return true;
}

function invalidate(txt, msg) {
    setTimeout(() => txt.addClass('is-invalid animate__shakeX'), 0);
    txt.trigger('select');
    txt.next().text(msg);
    return false;
}

function resetForm(clearData) {
    [txtCode, txtName, txtAddress, txtContact].forEach(txt => {
        txt.removeClass("is-invalid animate__shakeX");
        if (clearData) txt.val('');
    });
}

modalElm.on('show.bs.modal', () => {
    resetForm(true);
    txtCode.parent().hide();
    setTimeout(() => txtName.trigger('focus'), 500);
});
modalElm.on('show.bs.modal', () => {
    resetForm(true);
    txtId.parent().hide();
    setTimeout(() => txtName.trigger('focus'), 500);
});

function showToast(toastType, header, message) {
    const toast = $("#toast .toast");
    toast.removeClass("text-bg-success text-bg-warning text-bg-danger");
    switch (toastType) {
        case 'success':
            toast.addClass('text-bg-success');
            break;
        case 'warning':
            toast.addClass('text-bg-warning');
            break;
        case 'error':
            toast.addClass('text-bg-danger');
            break;
        default:
    }
    $("#toast .toast-header > strong").text(header);
    $("#toast .toast-body").text(message);
    toast.toast('show');
}

