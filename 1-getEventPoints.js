const getEventPoints = () => {
	const swimmers = [];
	const swimmerMap = {};
	document.querySelectorAll(".accordion").forEach((elem) => {
		const swimmerName = elem.querySelector(".swimmerName").innerText;
		const numPoints = [];
		const textPoints = [];
		elem.querySelectorAll(".points").forEach((pointTd) => {
			if (!["--", ""].includes(pointTd.innerText.trim())) {
				textPoints.push(pointTd.innerText);
				numPoints.push(parseFloat(pointTd.innerText));
			}
		});
		const total = numPoints.reduce((prev, curr) => prev + curr, 0);
		swimmers.push({
			swimmerName,
			numPoints,
			textPoints,
			total,
		});
		swimmerMap[swimmerName] = total;
	});
	if (!window.eventsToSum) {
		window.eventsToSum = {};
	}
	const eventNum = Object.keys(window.eventsToSum).length + 1;
	window.eventsToSum[eventNum] = swimmerMap;
	return window.eventsToSum;
};
