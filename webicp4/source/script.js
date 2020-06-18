function getGithubInfo(user) {
    // Create an instance of  class and send a GET request using it.
    // The function should finally return the object(
    var username='https://api.github.com/users/'+user;
    console.log(username);
    $.ajax({
        type: "GET",
        url: username,
        dataType: 'json',

    }).done(function(data){
        showUser(data);

    }).fail(function(){
        console.log("Some error Happened");
        noSuchUser(user);
    });

}

function showUser(user) {
    // set the contents of the h2 and the two div elements in the div '#profile' with the user content
    document.getElementById('image').src=user.avatar_url;
    document.getElementById('name_user').innerText=user.name;
    document.getElementById('user_id').innerText=user.id;
    document.getElementById('profile_url').href=user.url;
    document.getElementById('profile_url').innerText=user.html_url;
    document.getElementById('count_repository').innerText=user.public_repos;
    document.getElementById('followers').innerText=user.followers;
}
function noSuchUser(username) {
    // set the elements such that a suitable message is displayed
    if(data.message == "Not Found" || username == '') {
        alert("User not found");
    }
}
$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            getGithubInfo(username);
            //if the response is successful show the user's details

        }
    })
});