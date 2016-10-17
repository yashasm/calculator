/**
 * New node file
 */


module.exports.calc = function(req,res){
	res.render('calculator', { title: 'Calculator' });
}; 


module.exports.evaluate = function(req,res){
	//console.log("Evaluting");
	console.log(req.query.expression);
	var ans = '';
	try{
		ans = eval(req.query.expression);
		//console.log("answer is "+ans);
	}
	catch(err){
		//console.log("Error");	
		ans = "Invalid input";
	}
	if(ans.toString() == "Infinity"){
		ans = "Can not Divide by Zero";
	}
	res.json({answer:ans});
};
