$(function(){
    $("#saveGoal").on('click', function(){
        chrome.storage.sync.set({
            "proteinGoal" : $('#txtProteinGoal').val()
        });
    });
})