$(function() {
    let mark = 1;
    $("#bt_prev").click(function(e) {
        e.preventDefault();
        mark--;
        if (mark <= 0) {
            mark = 4;
        }

        slider(mark);
    });
    $("#bt_next").click(function(e) {
        e.preventDefault();
        mark++;
        if (mark >= 5) {
            mark = 1;
        }

        slider(mark);
    });

    function slider(mark) {
        if (mark == 1) {
            $('#first-container').attr("src", "img/NY_EmpireStateBuilding.jpg");
            $('#second-container').attr("src", "img/NY_StatueOfLiberty.jpg");
            $('#third-container').attr("src", "img/NY_FlatironBuilding.jpg");
            $('#fourth-container').attr("src", "img/NY_Manh.Bridge.jpg");
            $('#title-city').html('New York');
        }
        else if (mark == 2) {
            $('#first-container').attr("src", "img/5.jpg");
            $('#second-container').attr("src", "img/6.jpg");
            $('#third-container').attr("src", "img/7.jpg");
            $('#fourth-container').attr("src", "img/8.jpg");
            $('#title-city').html('Los Angeles')
        }
        else if (mark == 3) {
            $('#first-container').attr("src", "img/9.jpg");
            $('#second-container').attr("src", "img/10.jpg");
            $('#third-container').attr("src", "img/11.jpg");
            $('#fourth-container').attr("src", "img/12.jpg");
            $('#title-city').html('Washington');
        }
        else {
            $('#first-container').attr("src", "img/13.jpg");
            $('#second-container').attr("src", "img/14.jpg");
            $('#third-container').attr("src", "img/15.jpg");
            $('#fourth-container').attr("src", "img/16.jpg");
            $('#title-city').html('Miami');
        }

    }




});




$(document).ready(function() {

    $(".cross").hide();
    $(".menu").hide();
    $(".hamburger").click(function() {
        $(".menu").slideToggle("slow", function() {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });

    $(".cross").click(function() {
        $(".menu").slideToggle("slow", function() {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });

});