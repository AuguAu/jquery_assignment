$(document).ready(function() {
    $('#submitBtn').click(function(e) {
        // e.preventDefault(); // หากต้องการทดสอบโดยไม่ให้หน้าเว็บรีเฟรช ให้เอา comment ออก

        // 1. Reset Errors: ลบ class แดง และซ่อนข้อความ error ทั้งหมดก่อน
        $('.form-control').removeClass('input-error');
        $('.error-text').hide();

        let isValid = true;

        // --- ส่วนที่ 1: ตรวจสอบช่องว่าง (Username, Email, Password) ---
        const fields = ['username', 'email', 'password'];
        fields.forEach(function(id) {
            const input = $('#' + id);
            if ($.trim(input.val()) === '') {
                input.addClass('input-error');
                $('#err-' + id).show();
                isValid = false;
            }
        });

        // ตรวจสอบช่องว่างของ Confirm Password แยกออกมาเพื่อให้จัดการ ID ของ error ได้ง่าย
        const confirmInput = $('#confirmPassword');
        if ($.trim(confirmInput.val()) === '') {
            confirmInput.addClass('input-error');
            $('#err-confirm-empty').show();
            isValid = false;
        }

        // --- ส่วนที่ 2: ตรวจสอบ Interesting Topics (อย่างน้อย 1 อัน) ---
        // นับจำนวน checkbox ที่มี class .topic และถูก checked อยู่
        if ($('.topic:checked').length === 0) {
            $('#err-topics').css('display', 'inline'); // บังคับแสดงแบบ inline ให้สวยงามข้าง Label
            isValid = false;
        }

        // --- ส่วนที่ 3: ตรวจสอบ Gender (ห้ามเป็น --) ---
        if ($('#gender').val() === '--') {
            $('#err-gender').css('display', 'inline');
            isValid = false;
        }

        // --- ส่วนที่ 4: ตรวจสอบ Confirm Password Mismatch ---
        // เช็คก็ต่อเมื่อช่อง Confirm Password ไม่ว่าง (เพื่อไม่ให้ error ตีกัน)
        if ($.trim(confirmInput.val()) !== '') {
            if ($('#password').val() !== confirmInput.val()) {
                confirmInput.addClass('input-error');
                $('#err-confirm-match').show();
                isValid = false;
            }
        }

        if (isValid) {
            alert('Form submitted successfully!');
            // $('form').submit(); // หากมี tag <form> และต้องการ submit จริง
        }
    });
});