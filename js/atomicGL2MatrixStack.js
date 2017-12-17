// atomicGL
//----------------------------------------------------------------------------------------
// author: RC				
// contact: cozot@irisa.fr
// version: 2.1
// current version date: 2016/01/26
//----------------------------------------------------------------------------------------
// atomicGL2MatrixStack
//----------------------------------------------------------------------------------------
export default class atomicGL2MatrixStack {
	// constructor
	//------------------------
	constructor() {
		// attributes
		// -------------------------------------------------
		// model -> view Matrix 
		this.mvMatrix = mat4.create();
		// model -> view Matrix stack
		this.mvMatrixStack = [];
		// projection Matrix
		this.pMatrix = mat4.create();
		this.fov;
	}

	// methods
	// --------------------------------------------------
	// initMatrix(aGL,fov)
	//---------------------------
	// inputs: 	aGL: atomicGLContext
	// 			fov: field of view (in degrees) - float
	initMatrix(aGL, fov) {
		// perspective matrix
		this.fov = fov;
		//Reset perspective based on canvas client resize
		mat4.perspective(fov, aGL.gl.canvas.clientWidth / aGL.gl.canvas.clientHeight, 0.1, 1000.0, this.pMatrix);
		// model -> view matrix
		mat4.identity(this.mvMatrix);
	}

	// mvIdentity
	// ------------------------
	mvIdentity() { mat4.identity(this.mvMatrix); }

	// mvScale(x,y,z)
	//---------------------------
	// inputs: x,y,z: scale - float
	mvScale(x,y,z) { mat4.scale(this.mvMatrix, [x, y, z]); }
	
	// mvTranslate(x,y,z)
	//---------------------------
	// inputs: x,y,z: translation - float
	mvTranslate(x, y, z) { mat4.translate(this.mvMatrix, [x, y, z]); }

	// mvRotate(angleDegree,axe)
	//---------------------------
	// inputs:	angle: angle of rotation (degree) - float
	// 			axe: vector axe of rotation [float, float,float]
	mvRotate(angle, axe) { mat4.rotate(this.mvMatrix, angle * Math.PI / 180, axe); }

	// mvPushMatrix()
	//---------------------------	
	mvPushMatrix() {
		var copy = mat4.create();
		mat4.set(this.mvMatrix, copy);
		this.mvMatrixStack.push(copy);
	}

	// mvPopMatrix()
	//---------------------------	
	mvPopMatrix() {
		if (this.mvMatrixStack.length == 0) {
			alert("Invalid popMatrix!");
		}
		this.mvMatrix = this.mvMatrixStack.pop();
	}

	resetPerspective(aGL) {
		//Reset perspective based on canvas client resize
		mat4.perspective(this.fov, aGL.gl.canvas.clientWidth / aGL.gl.canvas.clientHeight, 0.1, 1000.0, this.pMatrix);
	}

}