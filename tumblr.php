<!DOCTYPE html>

<html>
<head>
    <!-- latest compiled and minified CSS -->
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <!--custom styles-->
            <link rel="stylesheet" type="text/css" href="styles.css">
            <link href="https://fonts.googleapis.com/css?family=Roboto:400|Roboto+Condensed:700" rel="stylesheet">
    <!-- latest compiled javaScript -->
            <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

<body>





<?php

//$currentTrendTumblr = $_POST['currentTrendTumblr'];
$tumblrurl = "https://api.tumblr.com/v2/tagged?tag=dougthepug" . "&api_key=JJZUAs8WPveKqlu6LXxIhoRnaLwrFlxBaNY9bI0xFENTGWJRit";
//echo $tumblrurl;
$tumblrData = file_get_contents($tumblrurl);
$feed = json_decode($tumblrData, true);
$tumblrCount = 0;
//print_r($feed);
if (empty($feed['response'])) {
    echo "No tumblr posts tagged '" . "' found on Tumblr.";
} else {
    for ($i = 0; $i < 15; $i++) {
      $tumblrPost = $feed['response'][$tumblrCount];
      $content = $tumblrPost['trail'][0]['content'];
      $blogName = $tumblrPost['blog_name'];
      //if(array_key_exists('photos', $tumblrPost)) {
      if ($tumblrPost['type'] == 'text'){
        writeTumblrhead($blogName, $tumblrPost);
        echo '<p class="tumblr-text">' . $content . '</p>';
        writeTumblrfoot($tumblrPost);
      } elseif ($tumblrPost['type'] == 'photo'){
        writeTumblrhead($blogName, $tumblrPost);
        foreach ($tumblrPost['photos'] as $photos) {
          echo '<img class="tumblr-pic" src="' . $photos['alt_sizes'][3]['url'] . '">';
        };
        echo '<p class="tumblr-text">' . $tumblrPost['caption'] . '</p>';
        writeTumblrfoot($tumblrPost);
      } elseif ($tumblrPost['type'] == 'video') {
        writeTumblrhead($blogName, $tumblrPost);
        echo $tumblrPost['player'][2]['embed_code'];
        echo '<p class="tumblr-text">' . $tumblrPost['caption'] . '</p>';
        writeTumblrfoot($tumblrPost);
      };
       $tumblrCount++;
    };
};


function writeTumblrhead ($blogName, $tumblrPost) {
    echo '<div class="tumblr-div">';
    echo '<div class="tumblr-user"><a target="_blank" href= "http://' .$blogName . '.tumblr.com">' . $blogName . '</a></div>';
    echo '<div class="tumblr-date">' . $tumblrPost['date'] . '</div>';
}
function writeTumblrfoot ($tumblrPost) {
    foreach ($tumblrPost['tags'] as $tags) {
            echo '<span class="tumblr-tags">#' . $tags . '</span>';
    };
    echo '</div>';
    echo '</br>';
}
?>
</body>
</html>
