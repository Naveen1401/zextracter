// $(document).jquery(function () {
//     $('#result').jstree({
//         "plugins": ["checkbox"]
//     });
// });
// $(function () {
//     $("#result")
//         .on("changed.jstree", function (e, data) {
//             console.log(data.changed.selected); // newly selected
//             console.log(data.changed.deselected); // newly deselected
//         })
//         .jstree({
//             "plugins": ["changed"]
//         });
// });
// $(function () {
// 	$("#result")
// 		.jstree({ "plugins" : ["themes","html_data","ui"] })
// 		// 1) the loaded event fires as soon as data is parsed and inserted
// 		.bind("loaded.jstree", function (event, data) { })
// 		// 2) but if you are using the cookie plugin or the core `initially_open` option:
// 		.one("reopen.jstree", function (event, data) { })
// 		// 3) but if you are using the cookie plugin or the UI `initially_select` option:
// 		.one("reselect.jstree", function (event, data) { });
// });

// $('#result').jstree();
// // 7 bind to events triggered on the tree
// $('#jstree').on("changed.jstree", function (e, data) {
// 	console.log(data.selected);
// });
// 8 interact with the tree - either way is OK
// $('button').on('click', function () {
// 	$('#jstree').jstree(true).select_node('child_node_1');
// 	$('#jstree').jstree('select_node', 'child_node_1');
// 	$.jstree.reference('#jstree').select_node('child_node_1');
// });


