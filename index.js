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

const sumEvents = () => {
	const swimmersAll = {};
	const events = Object.values(window.eventsToSum)
	for (const ev of events) {
		for (const swimmer in ev) {
			if (!swimmersAll[swimmer]) {
				swimmersAll[swimmer] = ev[swimmer];
			} else {
				swimmersAll[swimmer] += ev[swimmer];
			}
		}
	}
	const sorted = Object.keys(swimmersAll)
		.sort((a, b) => swimmersAll[b] - swimmersAll[a])
		.map((sw) => sw + ',' + swimmersAll[sw])
		.join("\n");
	console.log(`Swimmer,Points\n` + sorted);
};
