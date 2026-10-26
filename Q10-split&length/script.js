function countCharacters() {
    let tweet = document.getElementById("tweet").value;
    let words = tweet.split(" ");
    let characters = tweet.length;
    let totalLimit = 280;
    let remaining = totalLimit - characters;

    document.getElementById("result").innerHTML =
        "Total Characters Written: " + characters +
        "<br>Characters Left: " + remaining;
}
