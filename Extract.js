// var JSZip = require("jszip");
var JSZip = new JSZip();
var slidesobj = {};
var file = {};
var result = $("#result");
$("#file").on("change", function (evt) {
    document.getElementById("toHide").style.display = "none";
    document.getElementById("allFiles").style.display = "flex";
    // remove content
    result.html("");
    // be sure to show the results
    $("#result_block").removeClass("hidden").addClass("show");

    // Closure to capture the file information.
    function handleFile(f) {
        var $title = $("<h4>", {
            text: f.name
        });
        var fileContent = $(`<ul id="listContainer">`);
        result.append($title);
        result.append(fileContent);

        var dateBefore = new Date();
        JSZip.loadAsync(f)                                   // 1) read the Blob
            .then(function (zip) {
                var dateAfter = new Date();
                document.getElementById("loader").style.display = "none";
                $title.append($("<span>", {
                    "class": "small",
                    text: " (loaded in " + (dateAfter - dateBefore) + "ms)"
                }));



                zip.forEach(function (relativePath, zipEntry) {
                    zip.files[relativePath].async('blob').then(function (data) {
                        //https://stuk.github.io/jszip/documentation/api_zipobject/async.html
                        // var name = relativePath.split('/').pop();
                        //I'm pretty sure this splits the path by the slashes, then picks the last part.
                        //e.g. 'ppt/slides/slide1.xml' -> ['ppt', 'slides', 'slide1.xml'] -> 'slide1.xml'


                        const fName = zipEntry.name
                        const x = Math.floor((Math.random() * 10000));

                        slidesobj[x] = data;
                        file[fName] = x;

                        function handler(e) {
                            const name = e.path[0].id;
                            saveAs(slidesobj[name], zipEntry.name);
                        }
                        var listElem = $(`<li id=${x}>`);
                        listElem.append(zipEntry.name);

                        fileContent.append(listElem);



                        const el = document.getElementById(x);
                        el.addEventListener("click", handler, false);
                    })
                });

            }, 
            function (e) {
                result.append($("<div>", {
                    "class": "alert alert-danger",
                    text: "Error reading " + f.name + ": " + "Is not a zip file"
                }));
                console.log(1);
            });
    }

    var files = evt.target.files;
    for (var i = 0; i < files.length; i++) {
        handleFile(files[i]);
    }


});


function back() {
    location.reload();
}

const btn = document.getElementById("btn");
btn.onclick = function () {
    for (const key in file) {
        saveAs(slidesobj[file[key]], key);
    }
}