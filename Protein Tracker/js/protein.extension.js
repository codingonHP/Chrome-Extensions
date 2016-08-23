$(function () {

    var goal = 0;
    var remaining = 0;
    var saved = 0;

    chrome.storage.sync.get('proteinSavedValue', function (items) {

        if (items.proteinSavedValue) {
            saved = items.proteinSavedValue;
        }

        $("#currAchieved").text(saved);
    });

    chrome.storage.sync.get('proteinGoal', function (items) {

        if( items.proteinGoal ){
            goal = items.proteinGoal;
        }
        $("#proteinGoal").text( goal );
    });

    remaining = parseInt(goal) - parseInt(saved);
    $("#togo").text(remaining);


    $("#submit").on('click', function () {
        var textValue = $("#txtProteinValue").val();

        if(parseInt(textValue) > goal ){
            alert('input cannot be greater than goal value');
            return;
        }

        chrome.storage.sync.get('proteinSavedValue', function (item) {
            var tempTotal = 0;
            if (item.proteinSavedValue) {
                tempTotal += parseInt(item.proteinSavedValue);
            }

            if (textValue) {
                tempTotal += parseInt(textValue);
            }

            chrome.storage.sync.set({ 'proteinSavedValue': tempTotal })

            $("#txtProteinValue").val('');
            $("#currAchieved").text(tempTotal);
        });
    });


});