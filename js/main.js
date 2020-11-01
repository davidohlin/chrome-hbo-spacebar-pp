;(() => {
	window.onkeydown = e => {
		if (e.which !== 32) return false

		const players =
			typeof window.videojs === 'function' && window.videojs.getPlayers()

		if (!players) return false

		let player = null

		// Find the active player
		for (let [k, value] of Object.entries(players)) {
			if (typeof value === 'object' && value !== null) {
				player = value
			}
		}

		if (player) {
			player.paused() ? player.play() : player.pause()
		}

		return false
	}
})()
