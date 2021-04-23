class Rope{
	constructor(body1,body2, offsetX, offsetY)
	{
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.offsetX, y:this.offsetY}
		}
		//console.log(options);
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}
    
    display(){
        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
        }
    }
}
