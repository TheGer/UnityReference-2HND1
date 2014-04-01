#pragma strict


function OnTriggerEnter(other:Collider)
{
	Debug.Log(this.tag+" was hit by "+other.gameObject.tag);
}


function Start () {

}

function Update () {

}