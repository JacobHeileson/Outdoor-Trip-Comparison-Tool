$(document).ready(function () {

    // Home page button
    $("#startButton").click(function () {

        $(".hero").fadeOut(500, function () {
            window.location.href = "compare.html";
        });

    });


    // Compare trip button
    $("#compareButton").click(function () {

        // Get user input
        let tripType = $("#tripType").val();
        let groupSize = parseInt($("#groupSize").val());
        let tripLength = parseInt($("#tripLength").val());
        let experience = $("#experience").val();

        let estimatedCost = 0;
        let difficulty = "";
        let recommended = "";
        let gear = [];
        let description = "";



        // Camping calculations
        if (tripType === "Camping") {

    estimatedCost = (groupSize * tripLength * 40);
    difficulty = "Easy";
    recommended = "Families and beginner outdoor groups";

    gear = [
        "Tent",
        "Sleeping bag",
        "Camp stove",
        "Cooler",
        "Lantern or flashlight",
        "Camp chairs",
        "First aid kit"
    ];

    description = "Camping trips are affordable and beginner friendly. They are great for relaxing weekends, campfires, hiking, and spending time outdoors.";
}



        // Fishing calculations
        else if (tripType === "Fishing") {

    estimatedCost = (groupSize * tripLength * 70);
    difficulty = "Moderate";
    recommended = "Outdoor enthusiasts with some experience";

    gear = [
        "Fishing rod",
        "Tackle box",
        "Bait or lures",
        "Waders",
        "Fishing net",
        "Rain gear",
        "Polarized sunglasses"
    ];

    description = "Fishing trips require more specialized gear and planning. These trips are ideal for lakes, rivers, and backcountry adventures.";
}



        // Hunting calculations
        else if (tripType === "Hunting") {

    estimatedCost = (groupSize * tripLength * 120);
    difficulty = "Hard";
    recommended = "Experienced outdoorsmen and advanced groups";

    gear = [
        "Rifle or bow",
        "Camouflage clothing",
        "Hunting boots",
        "Game bags",
        "GPS or map",
        "Knife kit",
        "Emergency supplies"
    ];

    description = "Hunting trips are physically demanding and often take place in remote terrain. They require advanced preparation, safety awareness, and specialized equipment.";
}



        // Display results
        $("#costResult").text("$" + estimatedCost);
        $("#difficultyResult").text(difficulty);
        $("#recommendedResult").text(recommended);
        $("#descriptionResult").text(description);



        // Clear old gear list
        $("#gearResult").empty();



        // Add each gear item as a list item
        gear.forEach(function(item) {

            $("#gearResult").append("<li>" + item + "</li>");

        });



        // Show results with jQuery animation
        $("#results").hide().fadeIn(800);

    });

});