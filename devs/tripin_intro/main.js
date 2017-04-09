(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 750,
	height: 1334,
	fps: 24,
	color: "#5A2546",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/logo.png", id:"logo"}
	]
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,224);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2).p("EA5bgHVMg9dAeoQn3D7jsEBQgzA4hUBxQg8BSgrAdQhkBGlDA+QijAfitAcQgfAKqshaQlXgtlQgvIAWArIj4B7IgZgyIihBQQgRgegPhPQgMhLgBgDQgcibBbhOQBGg9CWgTQC2gXEdh2QDyhkEOiVQHNj9EUlrQDSkVB1lvQAnh7AninQA5jyABgCQAfh5AhhAQAohOA6gdMA+1gfQQBigeA5AgQBsA6BmB4QCqDIC7GIQDKGFBTFHQA7DsgRByQgJBAhTA8g");
	this.shape.setTransform(388.6,234.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg74AlSIgNhOQgciaBbhOQBGg9CWgTQC2gYEdh1QDyhlEOiUQHNj+EUlrQDSkVB1lvQAnh6AnioIA6j0QAfh4AhhBQAohNA6gdMA+1gfQQBigeA5AgQBsA6BmB4QCqDIC7GIQDKGEBTFIQA7DrgRByQgJBBhTA8IhSAyMg9dAeoQn3D7jsEBQgzA4hUByQg8BRgrAeQhkBFlDA+QijAgitAcQgfAJqshaQlXgtlQgvIAWArIj4B8IgZgzIihBRQgRgfgPhPg");
	this.shape_1.setTransform(388.6,234.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,-15.8,772.7,501.6);


(lib.Copawaves = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2).p("A/xNhQBfibBgioQDAlRAJhHQBdAZBUgyQBNgtAyhcQAxhcAEhnQAEhtgwhRQhniuB/iJQAxg1BNgnQBCgiBBgOQCcghCFAQQDHAYDXCBQBnA9DLhaQA0gYBmgxQBVgmAwgCQAxgBByAXQBDAOCcAkQExBDBvgeQI+iXByA2QBCAfCDM1QBCGZA0GUMg2XgFWg");
	this.shape.setTransform(198,40.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A88IpQDAlRAJhHQBdAZBUgyQBNgtAyhcQAxhcAEhnQAEhtgwhRQhniuB/iJQAxg1BNgnQBCgiBBgOQCcghCFAQQDHAYDXCBQBnA9DLhaQA0gYBmgxQBVgmAwgCQAxgBByAXQBDAOCcAkQExBDBvgeQI+iXByA2QBCAfCDMzQBCGbA0GUMg2XgFWIpgGQQBfibBgiog");
	this.shape_1.setTransform(199,39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-49.6,413.2,179.6);


(lib.Chorroencopa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2).p("AFOupQhBAjhiBEQjCCKikCrQoMIkgEKtQgBBWBJBAQBCA6BbARQBcARA4glQA/gpgRhcQgLg6ANhkQAOhtAnh6QBgkxDAjlQB5iPC1iXQCPh3DaiZQg7iDimg+QhTgehIgFg");
	this.shape.setTransform(3.4,-13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnkOlQhcgRhBg6QhKhAABhWQAEqtIMokQCkirDCiKQBihEBBgjQBIAFBTAeQCnA+A6CDQjaCZiOB3Qi2CXh4CPQjBDlhgExQgnB6gNBtQgOBkALA6QARBcg/ApQgmAZg3AAQgZAAgdgFg");
	this.shape_1.setTransform(3.2,-13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.3,-108.3,145.3,190.8);


(lib.Chorrocortado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2).p("AHhzeQg+BEhfB6Qi/DyijEIQoTNLhSLmQgJBWAWA7QAUA2AmALQAnALAmgnQArgrAahbQBPkNA4ikQBokyCWlkQCAk0C5j3QCljdDMikQg7iDg6hfQgdgvgSgVg");
	this.shape.setTransform(-11.7,38.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ao7TdQgmgLgUg2QgWg7AJhWQBSrmITtLQCjkIC/jyQBfh6A+hEQASAVAdAvQA6BfA7CDQjMCkilDdQi5D3iAE0QiWFkhoEyQg4CkhPENQgaBbgrArQgeAegeAAQgJAAgIgCg");
	this.shape_1.setTransform(-11.8,38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.2,-88.4,132.2,254.6);


(lib.Chorro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2).p("AFdtDQiaCXi2EFQlpIIiKIpQgVBSAmA2QAiAwA7ACQA7ADAjgtQAog0gRhcQgShlAyibQAqiDBZiiQBViZCaiuQCqi+Czh/Qg6iDgwheQgYgugNgVg");
	this.shape.setTransform(0,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Al3NEQg7gCgigwQgmg2AVhSQCKopFpoIQC2kFCaiXQANAVAYAuQAwBeA6CDQizB/iqC+QiaCuhVCZQhZCigqCDQgyCbASBlQARBcgoA0QghAqg2AAIgHAAg");
	this.shape_1.setTransform(-0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.1,-85.8,102.6,173.1);


(lib.Caidacopa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2).p("ArFNiQBfibBgioQDAlRAJhHQBdAZBUgyQBNgtAyhcQAvhcAEhnQAEhtguhRQhpiyBziHQAvg3BNglQBGgiBLgMIA5gGQBFgEA9AHQDEAVAvB+QAuB9hXJEQgsEgg1EJg");
	this.shape.setTransform(65.6,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AoMIiQDBlRAIhHQBeAZBUgyQBNgtAyhcQAuhcAEhnQAFhtgvhRQhpiyBziHQAvg3BNglQBGgiBMgMIA4gGQBFgEA+AHQDEAVAuB+QAvB9hYJEQgrEgg1EJIz8FHQBeibBgiog");
	this.shape_1.setTransform(66.2,39.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-48.7,146.3,176.9);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg+jAcjICjhRIgagzID5h9IAWArQVqqpAqgfQA5gmBYkmQBGj4B9idQDskyIbkNMA91ge2IBbgjQBjgfA5AgQEOCTEtJ0QFAJqgtEwQgJBBhTA9Mg/KAfkQoaENmEAGQjMAEjuhfQkihpg/AVQgwAS1kK2IAWArIj5B9IgYgxIijBRgEg7OAa4IAZAzIiiBRID9H8ICjhRIAYAwICThJIgVgrIXOrlQAugRBWASQBSATCwBDIAUAHQDfBVDOgHQFsgOH/j+MA91ge0QAtgTArgiQA3gsAEglQAokFkRolIhOibQkRoljqh9Qg7gfiHBEMg92Ae2Qn+D+jlEcQiCCghCDmIgHATQgzCygkBOQgjBOgrAcQggATpnEyQpDEhjSBlIgzAaIgVgrg");
	this.shape.setTransform(-4.7,23.9,1,1,0,0,0,-6.2,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAth4QgXANgWAkQgsBHAAB5IAPAAQgBgmAIgyQARhgAyg5g");
	this.shape_1.setTransform(-133.8,25.6,5.664,5.664,0,-116.5,63.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsB5QAAh5AshHQAWgkAWgNQgxA5gRBgQgIAyABAmg");
	this.shape_2.setTransform(-133.8,25.6,5.664,5.664,0,-116.5,63.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(200));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg+jAcjICjhRIgagzID5h9IAWArQVqqpAqgfQA5gmBYkmQBGj4B9idQDskyIbkNMA91ge2IBbgjQBjgfA5AgQEOCTEtJ0QFAJqgtEwQgJBBhTA9Mg/KAfkQoaENmEAGQjMAEjuhfQkihpg/AVQgwAS1kK2IAWArIj5B9IgYgxIijBRg");
	mask.setTransform(1.5,-0.6);

	// Layer 3
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(122.2,-55,1,1,0,0,0,386.7,240.8);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-2.6,y:29.8},9).to({y:8.9},5).wait(20).to({regX:386.4,rotation:-10,x:113.9,y:-78.3},10).wait(156));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-399,-244.3,800.9,487.4);


// stage content:



(lib.Animacion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("AgnQlIgfgRQjFhiirjFQlXmBAfoLQAipRCPk+IR+AAQCNFBAhJOQAfILlUGBQhtB8iHBgQhPA1gwAWIgfARQgTAKgVAAQgSAAgVgKg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:376,y:564.6}).wait(186));

	// Liquido copy
	this.instance = new lib.Chorroencopa();
	this.instance.parent = this;
	this.instance.setTransform(350.2,398.8,1,1,-19,0,0,0,-0.5);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({regX:-0.1,regY:-0.3,scaleX:1,scaleY:1,rotation:-40,x:340.2,y:548.8},5).wait(20).to({x:312.2},5).to({_off:true},1).wait(155));

	// Mask copy 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AzvOmIBZ24IOWuWIGnOLIAtgLIDrC+IMxW4IwRFbg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AEpKoIzFAAIknwMIOWuWIGnOKIAtgLIDrC+IMxW4g");
	var mask_1_graphics_14 = new cjs.Graphics().p("AEpKoIzFAAIknwMIOWuWIGnOKIAtgLIDrC+IMxW4g");
	var mask_1_graphics_34 = new cjs.Graphics().p("AB0K1IyCAAQA2imBOjRQCcmeB2jQQBfinFXmkQCrjRCWixIAtgLMANjAoRg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:402.9,y:401.2}).wait(9).to({graphics:mask_1_graphics_9,x:407.4,y:383.8}).wait(5).to({graphics:mask_1_graphics_14,x:407.4,y:383.8}).wait(20).to({graphics:mask_1_graphics_34,x:425.4,y:382.5}).wait(166));

	// Liquido copy 2
	this.instance_1 = new lib.Chorrocortado();
	this.instance_1.parent = this;
	this.instance_1.setTransform(365.8,393.8,1,1,0,0,0,-0.1,-0.6);
	this.instance_1._off = true;

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).to({x:393.8,y:309.8},5).to({x:365.8},5).wait(156));

	// Mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AzvOmIBZ24IOWuWIGnOLIAtgLIDrC+IMxW4IwRFbg");
	var mask_2_graphics_9 = new cjs.Graphics().p("AEpKoIzFAAIknwMIOWuWIGnOKIAtgLIDrC+IMxW4g");
	var mask_2_graphics_14 = new cjs.Graphics().p("AEpKoIzFAAIknwMIOWuWIGnOKIAtgLIDrC+IMxW4g");
	var mask_2_graphics_19 = new cjs.Graphics().p("AEpKoIzFAAIknwMIOWuWIGnOKIAtgLIDrC+IMxW4g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:402.9,y:401.2}).wait(9).to({graphics:mask_2_graphics_9,x:407.4,y:383.8}).wait(5).to({graphics:mask_2_graphics_14,x:407.4,y:383.8}).wait(5).to({graphics:mask_2_graphics_19,x:407.4,y:383.8}).wait(181));

	// Liquido
	this.instance_2 = new lib.Chorro();
	this.instance_2.parent = this;
	this.instance_2.setTransform(474.5,279.1,1,1,25,0,0,-0.6,1.5);
	this.instance_2._off = true;

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({regX:-0.8,regY:1.3,rotation:0,x:366.5,y:394.3},5).wait(19).to({_off:true},1).wait(166));

	// Mask copy 3 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("EAW2A0VIgfgRQjFhjirjEQlXmBAfoOQAhpRCQk+ISAAAQCNFBAhJOQAfIOlUGBQhtB7iHBgQhPA1gwAXIgfARQgTAJgVAAQgUAAgVgJg");
	var mask_3_graphics_9 = new cjs.Graphics().p("EAW2A0VIgfgRQjFhjirjEQlXmBAfoOQAhpRCQk+ISAAAQCNFBAhJOQAfIOlUGBQhtB7iHBgQhPA1gwAXIgfARQgTAJgVAAQgUAAgVgJg");
	var mask_3_graphics_39 = new cjs.Graphics().p("EAW2A0VIgfgRQjFhjirjEQlXmBAfoOQAhpRCQk+ISAAAQCNFBAhJOQAfIOlUGBQhtB7iHBgQhPA1gwAXIgfARQgTAJgVAAQgUAAgVgJg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:225.7,y:335.9}).wait(9).to({graphics:mask_3_graphics_9,x:225.7,y:335.9}).wait(30).to({graphics:mask_3_graphics_39,x:225.7,y:335.9}).wait(161));

	// Layer 11 copy
	this.instance_3 = new lib.Copawaves();
	this.instance_3.parent = this;
	this.instance_3.setTransform(385.5,630.3,1,1,0,0,0,66.2,39.8);
	this.instance_3._off = true;

	this.instance_3.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).to({x:177.1},13).to({x:145},2).to({x:234.5},15).to({x:190.5},11).wait(135));

	// Mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("EAW2A0VIgfgRQjFhjirjEQlXmBAfoOQAhpRCQk+ISAAAQCNFBAhJOQAfIOlUGBQhtB7iHBgQhPA1gwAXIgfARQgTAJgVAAQgUAAgVgJg");
	var mask_4_graphics_9 = new cjs.Graphics().p("EAW2A0VIgfgRQjFhjirjEQlXmBAfoOQAhpRCQk+ISAAAQCNFBAhJOQAfIOlUGBQhtB7iHBgQhPA1gwAXIgfARQgTAJgVAAQgUAAgVgJg");
	var mask_4_graphics_19 = new cjs.Graphics().p("EAW2A0VIgfgRQjFhjirjEQlXmBAfoOQAhpRCQk+ISAAAQCNFBAhJOQAfIOlUGBQhtB7iHBgQhPA1gwAXIgfARQgTAJgVAAQgUAAgVgJg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:225.7,y:335.9}).wait(9).to({graphics:mask_4_graphics_9,x:225.7,y:335.9}).wait(10).to({graphics:mask_4_graphics_19,x:225.7,y:335.9}).wait(181));

	// Layer 11
	this.instance_4 = new lib.Caidacopa();
	this.instance_4.parent = this;
	this.instance_4.setTransform(380.6,550.9,1,1,133,0,0,-0.1,-0.1);
	this.instance_4._off = true;

	this.instance_4.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({regX:0,regY:-0.3,rotation:40,x:356.3,y:531.3},5).to({_off:true},1).wait(175));

	// Copa copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5A2546").s().p("AgnQlIgfgRQjFhiirjFQlXmBAfoLQAipRCPk+IR+AAQCNFBAhJOQAfILlUGBQhtB8iHBgQhPA1gwAWIgfARQgTAKgVAAQgSAAgVgKg");
	this.shape.setTransform(376,564.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah9FzIAAgOIA3gGQA3gLgBgXQgBgXABiKIAAiFQgigQgggiQhChJAGhjQAEhNAPg0IAQgqIDXAAIAQAqQAPA0AEBNQAGBjhCBJQgUAXgZAPIgVAMIAACFQABCKgBAXQgBAXA3ALQAbAGAcAAIAAAOg");
	this.shape_1.setTransform(376,660.7,5.621,5.621);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},9).wait(191));

	// Mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_0 = new cjs.Graphics().p("Eg6sBo/MAAAjRrMB1ZAAAMAAADRrg");
	var mask_5_graphics_9 = new cjs.Graphics().p("Eg6sBo/MAAAjRrMB1ZAAAMAAADRrg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:mask_5_graphics_0,x:375.8,y:672}).wait(9).to({graphics:mask_5_graphics_9,x:375.8,y:672}).wait(191));

	// Buttle
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(906.2,61.4,0.999,0.999,18.8,0,0,-0.1,-1.3);

	this.instance_5.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,rotation:0,x:785.3,y:96.6},9).wait(25).to({scaleX:1,scaleY:1,rotation:18.8,x:906.2,y:61.4},10).wait(156));

	// Logo
	this.instance_6 = new lib.logo();
	this.instance_6.parent = this;
	this.instance_6.setTransform(244,947,0.828,0.828);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(619,668.9,507.5,1130.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;