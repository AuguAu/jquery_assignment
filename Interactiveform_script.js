$(document).ready(function() {
    $('#submitBtn').click(function(e) {


        $('.form-control').removeClass('input-error');
        $('.error-text').hide();

        let isValid = true;

        const fields = ['username', 'email', 'password'];
        fields.forEach(function(id) {
            const input = $('#' + id);
            if ($.trim(input.val()) === '') {
                input.addClass('input-error');
                $('#err-' + id).show();
                isValid = false;
            }
        });

        const confirmInput = $('#confirmPassword');
        if ($.trim(confirmInput.val()) === '') {
            confirmInput.addClass('input-error');
            $('#err-confirm-empty').show();
            isValid = false;
        }


        if ($('.topic:checked').length === 0) {
            $('#err-topics').css('display', 'inline'); 
        }

 
        if ($('#gender').val() === '--') {
            $('#err-gender').css('display', 'inline');
            isValid = false;
        }


        if ($.trim(confirmInput.val()) !== '') {
            if ($('#password').val() !== confirmInput.val()) {
                confirmInput.addClass('input-error');
                $('#err-confirm-match').show();
                isValid = false;
            }
        }

        if (isValid) {
            alert('Form submitted successfully!');
        }
    });
});