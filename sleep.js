/**
 *
 */
const exec = require('child_process').execSync;

/**
 *
 * @param time
 * @param func
 * @private
 */
const _sleep =
    (time, func = 'sleep') => (
	(time = parseInt(time)),
	(time > 0
		? exec(`${func} ${time}`)
		: null
	)
    )
;

/**
 *
 * @param seconds
 * @returns {*}
 */
module.exports.sleep = seconds => _sleep(seconds);

/**
 * 1 second = 1 000 000 microseconds (1e6)
 *
 * usleep(1e6) == sleep(1)
 *
 * @param microSeconds
 * @returns {*}
 */
module.exports.usleep = microSeconds => _sleep(microSeconds, 'usleep');

/**
 * 1 second = 1000 miliseconds (1e3)
 *
 * msleep(1000) == sleep(1)
 *
 * @param miliSeconds
 * @returns {"ok" | "not-equal" | "timed-out"}
 */
module.exports.msleep = milliSeconds => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliSeconds);

//EOF//
