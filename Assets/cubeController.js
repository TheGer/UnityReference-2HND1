#pragma strict
//boolean variable.  If true, show coordinates, if not, hide them
var showCoordinates:boolean;

//rotation
var rotate:boolean;

//object to instantiate
var objectToInstantiate:Rigidbody;

//to show text, we use the OnGUI method
function OnGUI()
{
	//only show coordinates if showcoordinates = true
	if (showCoordinates == true)
	{
	//create a label in the top left corner of the screen
	//with the coordinates of the cube in world space
	GUI.Label(Rect(0,0,150,50),"X: "+transform.position.x + " Y:"+transform.position.y);
	//we get the screen coordinates
	var screenX:float;
	var screenY:float;
	
	//transform from world to screen for X
	screenX = Camera.main.WorldToScreenPoint(transform.position).x;
	//transform from world to screen for Y
	screenY = Camera.main.WorldToScreenPoint(transform.position).y;
	
	//show the coordinates in pixels
	GUI.Label(Rect(0,50,150,50),"X: "+screenX + " Y:"+screenY);
	}

}

function Start () {
	
}

function Update () {
	//move cube in X and Y.  If the rotate variable is true
	//the cube will move like a space ship (rotating when we press left and right)
	if (rotate == false) {	
		transform.Translate(Vector3.right * 10 * Input.GetAxis("Horizontal") * Time.deltaTime);
	}
	else{
		transform.Rotate(Vector3.back * 20 * Input.GetAxis("Horizontal") * Time.deltaTime);
	}
	
	//move forward
	transform.Translate(Vector3.up * 10 * Input.GetAxis("Vertical") * Time.deltaTime);
	
	
	if (Input.GetKeyDown(KeyCode.Space))
	{
	//this command INSTANTIATES the object to instantiate at the position and 
	//rotation of the cube
	Instantiate(objectToInstantiate,transform.position,transform.rotation);
	
	}
	
	
}