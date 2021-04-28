//Trigger Modal
$(document).on('click', '#revenue-m', function () {
    $("#m-revenue").modal("show");
});

//Insert Parameter
$(document).on('click', '.add-param', function () {
    var j = $(this);
    var parameter = `<div class="input-group mb-2">
                        <input type="text" class="form-control" placeholder="insert parameter">
                        <span class="input-group-text red rule-btn"><a class="remove-param" href="javascript:void(0);">remove rule</a></span>
                        <span class="input-group-text minus-btn pl-0"><a class="remove-rule" href="javascript:void(0);">-</a></span>
                        <span class="input-group-text plus-btn pr-0"><a class="add-rule" href="javascript:void(0);">+</a></span>
                    </div>`;
    j.closest(".parameters").find(".minus-btn").addClass("invisible");
    j.closest(".parameters").find(".plus-btn").addClass("invisible");
    j.closest(".parameters").prepend(parameter);
    j.closest(".parameters").find(".input-group.mb-2:first-child .minus-btn").removeClass("invisible");
    j.closest(".parameters").find(".input-group.mb-2:first-child .plus-btn").removeClass("invisible");
    if ($(".rules .parentRule").length < 2) {
        $(".rules .parentRule .add-rule").addClass("disabled");
        $(".rules .parentRule:last-child .add-rule").removeClass("disabled");
        $(".rules .parentRule .remove-rule").removeClass("disabled");
        $(".rules .parentRule .remove-rule").addClass("disabled");
    }
});

//Delete Parameter
$(document).on('click', '.remove-param', function () {
    var j = $(this);
    j.closest(".input-group").find(".minus-btn").addClass("invisible");
    j.closest(".input-group").find(".plus-btn").addClass("invisible");
    j.closest('.input-group').remove();
    $(".parameters .input-group:first-child .minus-btn").removeClass("invisible");
    $(".parameters .input-group:first-child .plus-btn").removeClass("invisible");
});

//Add Rule
$(document).on('click', '.add-rule', function () {
    var rule = `<div class="row g-3 mt-3 parentRule">
                    <div class="col-auto">
                    <select class="form-select">
                        <option value="all">aff_sub</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="col-auto">
                    <select class="form-select">
                        <option value="all">ls</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="col-8 parameters">
                    <!-- Parameter -->
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="insert parameter">
                        <span class="input-group-text blue rule-btn"><a class="add-param" href="javascript:void(0);">add rule</a></span>
                        <span class="input-group-text minus-btn pl-0"><a class="remove-rule" href="javascript:void(0);">-</a></span>
                        <span class="input-group-text plus-btn pr-0"><a class="add-rule" href="javascript:void(0);">+</a></span>
                    </div>
                </div>
            </div>`;
    $(".rules").append(rule);
    $(".rules .parentRule .add-rule").addClass("disabled");
    $(".rules .parentRule:last-child .add-rule").removeClass("disabled");
    $(".rules .parentRule .remove-rule").removeClass("disabled");
    if ($(".rules .parentRule").length < 2) {
        console.log("Aa");
        $(".rules .parentRule .remove-rule").addClass("disabled");
    }
});

//Remove Rule
$(document).on('click', '.remove-rule', function (e) {
    var j = $(this);
    j.closest('.parentRule').remove();
    $(".rules .parentRule .add-rule").addClass("disabled");
    $(".rules .parentRule:last-child .add-rule").removeClass("disabled");
    $(".rules .parentRule .remove-rule").removeClass("disabled");
    if ($(".rules .parentRule .remove-rule").length < 2) {
        $(".rules .parentRule .remove-rule").addClass("disabled");
    }
    if ($(".rules .parentRule").length < 2) {
        console.log("cc");
        $(".rules .parentRule .remove-rule").addClass("disabled");
    }
});


    