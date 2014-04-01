#pragma strict

//create a home button on the bottom right of the screen
function OnGUI()
{
	//in this case we will create three buttons in the center of the screen
	var screenX:float;
	var screenY:float;
	
	//find the center of the screen in SCREEN coordinates
	screenX = Camera.main.WorldToScreenPoint(Vector3(4,4,0)).x;
	screenY = Camera.main.WorldToScreenPoint(Vector3(4,4,0)).y;
	
	//now we place the buttons relative to the CENTER of the screen
	if (GUI.Button(Rect(screenX-50,screenY-100,125,100),"Home"))
	{
		Application.LoadLevel(0);
	}
}


function Start () {

}

function Update () {

}