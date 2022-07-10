(() => {
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
		.map((sw) => `${swimmersAll[sw]} - ${sw}`)
		.join("\n");
	console.log(`Sorted by points\n----------------\n` + sorted);
})();
