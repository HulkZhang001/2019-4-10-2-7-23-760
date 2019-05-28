module.exports = function main(inputs) {
	    var distance = inputs["distance"];
		var parkTime = inputs["parkTime"];
		var pay = 6;
		pay += 0.25 * parkTime;

		if(distance >= 2) {
			pay += 0.8 * (distance - 2);
			if(distance >= 8) {
				pay += 0.8 * 0.5 * (distance - 8);
			}
		}

		return Math.round(pay);
};
