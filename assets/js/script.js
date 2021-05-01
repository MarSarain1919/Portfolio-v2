
// function render(data) {
//     var html = "<div class='commentBox'><div class='rightPanel'><span>" + data.name + "<div class='date'>" + data.date + "/<div><p>" + data.body + "</p></div><div class='clear'></div></div>";
//     $('#container').append(html);
// }

// $(document).ready(function() {
//     var comment = [
//         {'name': "Britney Spears", "date": "25 Dec, 2019", "body": "this is a test"},
    
//     ];
    
//     for (var i = 0; i < comment.length; i++) {
//         render(comment[i]);

//     }

//     $('#addComment').click(function() {
//         var addComment = {
//             "name:": $('#name').val(),
//             "date": $('#date').val(),
//             "body": $('#bodyText').val(),
//         };
//         // console.log(addComment);
//         comment.push(addComment);
//         render(addComment);
//         $("#name").val('');
//         $("#date").val('mm/dd/yyyy');
//         $("#body").val('');
//     });

// });