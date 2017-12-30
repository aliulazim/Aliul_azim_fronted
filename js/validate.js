$(document).ready(function() {

    
    $('form').submit(function(event) {

        $('.form-group').removeClass('has-error'); 
        $('.help-block').remove(); 

       
        var formData = {
            'name'              : $('input[name=name]').val(),
            'email'             : $('input[name=email]').val(),
            'mobile'            : $('input[name=mobile]').val(),
            'address'           : $('input[name=address]').val()
        };

        // process the form
        $.ajax({
            type        : 'POST', 
            url         : 'process.php', 
            data        : formData, 
            dataType    : 'json', 
            encode      : true
        })
            
            .done(function(data) {

                
                console.log(data); 

                
                if ( ! data.success) {
                    
                    
                    if (data.errors.name) {
                        $('#name-group').addClass('has-error'); 
                        $('#name-group').append('<div class="help-block">' + data.errors.name + '</div>'); 
                    }

                    
                    if (data.errors.email) {
                        $('#email-group').addClass('has-error'); 
                        $('#email-group').append('<div class="help-block">' + data.errors.email + '</div>'); 
                    }

                    
                    if (data.errors.mobile) {
                        $('#mobile-group').addClass('has-error'); 
                        $('#mobile-group').append('<div class="help-block">' + data.errors.mobile + '</div>'); 
                    }

                    if (data.errors.address) {
                        $('#address-group').addClass('has-error'); 
                        $('#address-group').append('<div class="help-block">' + data.errors.address + '</div>'); 
                    }

                } else {

                    $('form').append('<div class="alert alert-success">' + data.message + '</div>');


                }
            })

            .fail(function(data) {

                console.log(data);
            });

        event.preventDefault();
    });

});
