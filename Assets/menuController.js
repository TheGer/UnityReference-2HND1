#pragma strict

//all menus are built in the OnGUI function.  We 
//will create as many buttons as there are scenes
function OnGUI()
{
	//in this case we will create three buttons in the center of the screen
	var screenX:float;
	var screenY:float;
	
	//find the center of the screen in SCREEN coordinates
	screenX = Camera.main.WorldToScreenPoint(Vector3(0,0,0)).x;
	screenY = Camera.main.WorldToScreenPoint(Vector3(0,0,0)).y;
	
	
	//now we place the buttons relative to the CENTER of the screen
	if (GUI.Button(Rect(screenX-50,screenY-100,125,100),"Collisions"))
	{
		Application.LoadLevel(1);
	}
	if (GUI.Button(Rect(screenX-50,screenY,125,100),"Coordinates"))
	{
		Application.LoadLevel(2);
	}
	if (GUI.Button(Rect(screenX-50,screenY+100,125,100),"Instantiating Objects"))
	{
		Application.LoadLevel(3);
	}
	
	
	
	

}



function Start () {

}

function Update () {

}