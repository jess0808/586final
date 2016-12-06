<!doctype html>
    
<html>
<head>
<!-- latest compiled and minified CSS -->
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<!--custom styles-->
        <link rel="stylesheet" type="text/css" href="styles.css">
        <link href="https://fonts.googleapis.com/css?family=Roboto:400|Roboto+Condensed:700" rel="stylesheet">
<!-- latest compiled javaScript -->
        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        <script src="http://code.jquery.com/jquery-latest.min.js"></script>
        <script src="tweetlinkit.js"></script>

<script>

    function pageComplete(){
        $('.tweet').tweetLinkify();
    }
</script>
</head>

<body>
<?php
ini_set('display_errors', 1);
require_once('TwitterAPIExchange.php');

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "744784586979184641-vtXvqDUjsKIMq4Cyuh0TgNkvaBjbh49",
    'oauth_access_token_secret' => "wqZw92B2RHDdj0jYB3gp5Pmq808hwYqWkxPR85oMTs14a",
    'consumer_key' => "eKxxAgEM4hbYi2H81mtiOIGa3",
    'consumer_secret' => "OIHEtnCdkABlVmmLuyjArqAvznnWtVcR4BfWao3iPNjkC6YwTk"
);

/** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
$url = 'https://api.twitter.com/1.1/blocks/create.json';
$requestMethod = 'POST';

/** POST fields required by the URL above. See relevant docs as above **/
$postfields = array(
    'screen_name' => 'usernameToBlock',
    'skip_status' => '1'
);

/** Perform a POST request and echo the response **/
//$twitter = new TwitterAPIExchange($settings);
//echo $twitter->buildOauth($url, $requestMethod)
//             ->setPostfields($postfields)
//             ->performRequest();

/** Perform a GET request and echo the response **/
/** Note: Set the GET field BEFORE calling buildOauth(); **/
$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?q=from:itsdougthepug+filter:images&count=100';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);


$tweetData = json_decode($twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest(), $assoc=TRUE);
echo '<div class="container">';
foreach($tweetData['statuses'] as $items){
    
    

    
    $userArray = $items['user'];
    $date = new DateTime($items['created_at']);
    $date->setTimezone(new DateTimeZone('America/New_York'));
    $entitiesArray = $items['entities'];
    $mediaArray = $entitiesArray['media'];
    $tweetMedia = $mediaArray[0];
    
    echo '<div class="row twit-tweet">';
    
    echo "<div class='twit-profilepic col-xs-2'><a target='_blank' href='http://www.twitter.com/" . $items['user']['screen_name'] . "'><img class='twitter-pic' target='_blank' src='" . $items['user']['profile_image_url'] . "'></a></div>";
    
    echo "<div class='twit-user col-xs-10'><span class='twit-name'><a target='_blank' href='http://twitter.com/" . $items['user']['screen_name'] . "'> ". $items['user']['name'] . "</span>";
    echo "<span class='twit-handle'>" . " @" . $items['user']['screen_name'] . "</span></a>";
    echo "<div class='twit-text tweet'>" . $items['text'] . "'</div>";
    echo "<div class='twit-timestamp'>" . $date->format( 'M jS g:i a ' ) . "</div>";
    
    


    echo "<img class='twit-media' style='width: 85%' src='" . $tweetMedia['media_url'] . "'>";
    echo "<div class='twit-line' style='width:100% height:1px'></div></div>";


    echo '</div>';
    
    
}
echo '</div>';
echo "<script>pageComplete();</script>";



$twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();
?>




</body>
</html>
