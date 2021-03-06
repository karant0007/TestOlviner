$rm_CommingSoon = $('#rm_CommingSoon');
$rm_DataSection = $('#rm_DataSection');
$NewsBody = $('#NewsBody');
var url = 'http://35.165.87.199/WebService/OlvinerServices.svc/Web/Content';
$(document).ready(function () {
    BindIntents();
    $('#NewsModal').modal('show');
});
function BindIntents() {
    $.ajax({
        type: "POST",
        url: url,
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var result = response.Result;
            var resultContent = result.Content;
            var NewsData = resultContent[0];
            var rmData = resultContent[1];

            BindNewsContents(NewsData);
            BindReasarchMathods(rmData.MediaContent);
        },
        error: function (response) {
            //alert('Failed');
        }

    });
};
function BindNewsContents(data) {
    try {
        if (data != undefined && data.TextContent !='') {
            $NewsBody.empty();
            $NewsBody.html(data.TextContent);
        }
    } catch (e) {}
};
function BindReasarchMathods(data) {
    try {
        $rm_DataSection.empty();
        if (data != undefined && data.length > 0) {
            $rm_CommingSoon.hide();
            $rm_DataSection.show();

            $rm_DataSection.owlCarousel();
            var dataCarosello = $rm_DataSection.data('owlCarousel');
            for (var i = 0; i < data.length; i++) {
                var htmlStr = "<div class='item text-center'>" +
                                    "<div class='rm'> <a> <img src='" + data[i].ContentFileName + "'/></a> </div>" +
                                    "<p>" + data[i].ThumbName + "</p>" +
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
