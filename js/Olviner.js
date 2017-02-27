$rm_CommingSoon = $('#rm_CommingSoon');
$rm_DataSection = $('#rm_DataSection');
$(document).ready(function () {
    debugger;
    BindIntents();
});
function BindIntents() {
    $.ajax({
        url: 'http://demolviner.somee.com/WebService/OlvinerServices.svc/Web/Content',
        success: function (response) {
            alert('Success');
        },
        error: function (response) {
            alert('Failed');
        }
    });
    //$.ajax({
    //    type: "POST",
    //    crossDomain: "true",
    //    url: "http://demolviner.somee.com/WebService/OlvinerServices.svc/Web/Content",
    //    data: "{}",
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    headers: {
    //        "cache-control": "no-cache",
    //        "postman-token": "ce957fd9-64a6-67ad-3cef-a1130911eed0"
    //    },
    //    success: function (response) {
    //        alert('Success');
    //    },
    //    error: function (response) {
    //        alert('Failed');
    //    }

    //});
};

function BindReasarchMathods(data) {
    try {
        $rm_DataSection.empty();
        if (data == undefined) {
            $rm_CommingSoon.hide();
            $rm_DataSection.show();

            $rm_DataSection.owlCarousel();
            var dataCarosello = $rm_DataSection.data('owlCarousel');
            for (var i = 0; i < 20; i++) {
                var htmlStr = "<div class='item text-center'>" +
                                    "<div class='rm'> <a> <img src='img/Coupans/1.png'/></a> </div>" +
                                    "<p>ABCD</p>" +
                              "</div>";
                dataCarosello.addItem(htmlStr);
            }
        }
        else {
            $rm_CommingSoon.show();
            $rm_DataSection.hide();
        }


    } catch (e) { }
};