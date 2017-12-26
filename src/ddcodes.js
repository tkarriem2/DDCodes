var strObj = [];
var strObj1 = [];
var tblhdrs = [];
var chkopts = ["unchecked", "checked"];
var o, hstr1, hstr2, chkid;

$(document).ready(function () {
    $.getJSON("../bin/ddcodes_temp.json", function (jsn) {
        $.each(jsn, function (i, field) {
            if (_.isObject(field)) {
                _.forEach(field, function (v, k) {
                    var typ = typeof (v);
                    if (typ === "object") {
                        _.forEach(v, function (w, j) {
                            console.log(w + "---" + j);
                            if (j.startsWith("dd") && tblhdrs.length < 4) {
                                var hstr = "<th>" + j.substring(2) + "</th>";
                                tblhdrs.push(hstr);
                            }
                            switch (strObj.length + 1) {
                                case 4:
                                    console.log(strObj.length + 1);
                                    chkid = "chkbx" + (k + 1);
                                    o = "<input type='checkbox' class='darkblue filled-in chkbx' id='" + chkid + "' checked='" + chkopts[w] + "' / ><label for='" + chkid + "'></label>";
                                    hstr1 = "<td class='center'>" + o + "</td>";
                                    strObj.push(hstr1);
                                    hrst2 = "<tr>" + strObj + "</tr>";
                                    strObj1.push(hrst2);
                                    strObj = [];
                                    break;
                                default:
                                    console.log(strObj.length + 1);
                                    var hrdstDflt = "<td>" + w + "</td>";
                                    strObj.push(hrdstDflt);
                                    break;
                            }
                        });
                    }
                });
            }
        });
        $("<tr>" + tblhdrs + "</tr>").appendTo('#tblhd');
        $("<tr>" + strObj1 + "</tr>").appendTo('#tblbod');
    });

    $("#maintbl").click(function (event) {
        event.stopPropagation();
        var bx = $(this).find("td:las");
        console.log(bx);
        $(bx).velocity('transition.slideLeftOut');
    });

    $("input[type=checkbox]").change

}); //End docready

function svfrm() {
    var chkarr = $("jsnChks").get(0);
}
