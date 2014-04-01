#pragma strict

function Start () {

}

function Update () {
	//move the object forward relative to itself
	transform.Translate(Vector3.up * 20 * Time.deltaTime);
}


//when the object leaves the screen, destroy the game object
//we used something similar in the LASER
function OnBecameInvisible()
{
	Destroy(this.gameObject);
}