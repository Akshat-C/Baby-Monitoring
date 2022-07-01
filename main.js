status1 = "";
object = [];
recx = 0;
recy = 0;
recw = 0;
rech = 0;
recn = 0;
recp = 0;
alert = "";
function preload()
{
    alert = loadSound('red_alert.mp3');
}

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function start()
{
    o_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Objects Detecting";
}

function modelLoaded()
{
    console.log("Object Detector has been loaded");
    status1 = true;
}

function gotResults(error, results)
{
    if (error)
    {
        console.error()
    } else 
    {
        console.log(results);
        object = results;
    }
}

function draw()
{
    image(video, 0, 0, 380, 380);

    for (i=0; i<object.length; i++)
    {
        if (object[i].label = "person")
        {
            document.getElementById("status").innerHTML = "Baby has been detected";
            alert.stop();
        } else 
        {
            document.getElementById("status").innerHTML = "Baby has not been detected";
            alert.play();
        }
    }
    if (object.length <= 0 )
    {
        document.getElementById("status").innerHTML = "Baby has been detected";
        alert.play();
    }
}
