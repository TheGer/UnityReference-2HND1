#pragma strict


//collisions
function OnTriggerEnter(other:Collider)
{
	//output a string describing the collision
	Debug.Log(this.tag + " hits "+other.gameObject.tag);
	//this will state that cube 1 hits cube 2
	
	//therefore if we check the tag for the other object, 
	//we will know who was hit by what
	

}


function Start () {

}

function Update () {

}