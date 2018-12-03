(function () {
	'use strict';

	const RPE = {
			7: {
				1: 89.2,
				2: 86.3,
				3: 83.7,
				4: 81.1,
				5: 78.6,
				6: 76.2,
				7: 73.9,
				8: 70.7,
				9: 68,
				10: 65.3,
				11: 62.6,
				12: 59.9
			},
			8: {
				1: 92.2,
				2: 89.2,
				3: 86.3,
				4: 83.7,
				5: 81.1,
				6: 78.6,
				7: 76.2,
				8: 73.9,
				9: 70.7,
				10: 68,
				11: 65.3,
				12: 62.6
			},
			9: {
				1: 95.5,
				2: 92.2,
				3: 89.2,
				4: 86.3,
				5: 83.7,
				6: 81.1,
				7: 78.6,
				8: 76.2,
				9: 73.9,
				10: 70.7,
				11: 68,
				12: 65.3
			},
			10: {
				1: 100,
				2: 95.5,
				3: 92.2,
				4: 89.2,
				5: 86.3,
				6: 83.7,
				7: 81.1,
				8: 78.6,
				9: 76.2,
				10: 73.9,
				11: 70.7,
				12: 68
			},
			9.5: {
				1: 97.8,
				2: 93.9,
				3: 90.7,
				4: 87.8,
				5: 85,
				6: 82.4,
				7: 79.9,
				8: 77.4,
				9: 75.1,
				10: 72.3,
				11: 69.4,
				12: 66.7
			},
			8.5: {
				1: 93.9,
				2: 90.7,
				3: 87.8,
				4: 85,
				5: 82.4,
				6: 79.9,
				7: 77.4,
				8: 75.1,
				9: 72.3,
				10: 69.4,
				11: 66.7,
				12: 64
			},
			7.5: {
				1: 90.7,
				2: 87.8,
				3: 85,
				4: 82.4,
				5: 79.9,
				6: 77.4,
				7: 75.1,
				8: 72.3,
				9: 69.4,
				10: 66.7,
				11: 64,
				12: 61.3
			},
			6.5: {
				1: 87.8,
				2: 85,
				3: 82.4,
				4: 79.9,
				5: 77.4,
				6: 75.1,
				7: 72.3,
				8: 69.4,
				9: 66.7,
				10: 64,
				11: 61.3,
				12: 58.6
			}
		};

	document.querySelector('#max-to-target').addEventListener('input', onInput);
	document.querySelector('#actual-to-max').addEventListener('input', onInput);

	function onInput (evt) {
		let target;
		const form = evt.currentTarget,
			options = ['rpe', 'reps', 'weight', 'max'],
			inputs = options.map(query => form.querySelector(`.${query}`))
				.filter(input => !input.readOnly || !(target = input))
				.map(input => Number(input.value.replace(',','.')));

		if (inputs.every(value => value)) {
			target.value = form.id === 'max-to-target'
				? calcTargetWeight(...inputs)
				: calcMax(...inputs);
		}
	}

	function getPercent(rpe, reps) {
		return RPE[rpe][reps] / 100;
	}

	function calcTargetWeight(rpe, reps, max) {
		return round( max * getPercent(rpe, reps));
	}

	function calcMax(rpe, reps, weight) {
		return round( weight / getPercent(rpe, reps));
	}

	function round( number ) {
		return Math.round( number * 2 ) / 2
	}
})();
