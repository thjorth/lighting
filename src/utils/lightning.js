/* eslint-disable */
export async function getMidiDevices() {
    return new Promise(resolve => {
        let result = {
            inputs: [],
            outputs: [],
        };
        if (navigator.requestMIDIAccess) {
            navigator.requestMIDIAccess()
                .then((midiAccess) => {
                    //console.log('midiAccess', midiAccess)
                    for (var input of midiAccess.inputs.values()) {
                        result.inputs.push(input);
                    }
                    for (var output of midiAccess.outputs.values()) {
                        result.outputs.push(output);
                    }
                    //console.log('result', result)
                    resolve(result);
                });
        }
        else {
            resolve(result);
        }

    });
}

let uno = null;

export async function initialize() {
    let devices = await getMidiDevices();
    uno = devices.outputs.find(device => {
        if (/usb uno/i.test(device.name)) {
            return device;
        }
    })

    return new Promise(resolve => {
        resolve(uno);
        console.log('uno', uno);
    });
}

let presetQueue = [];
let timeoutId = null;

export async function show(preset) {
    console.log('show ', preset)
    if (!uno) {
        return;
    }
    await uno.open();
    uno.send([144, preset + 48, 127]);
    await uno.close();
    return new Promise(resolve => {
        resolve();
    })
}

export async function clear() {
    // while (timeOutQueue.length > 0) {
    //     clearTimeout(timeOutQueue.pop());
    // }
    console.log('clear');
    presetQueue = [];
    if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
    }

    return new Promise(resolve => {
        resolve();
    })
}

export async function blackout() {
    await show(-1);

    return new Promise(resolve => {
        resolve();
    })
}

async function showNextQueuedItem() {
    if (presetQueue.length > 0) {
        let preset = presetQueue.shift();
        console.log('showing preset:', preset);
        await show(preset.preset);
        timeoutId = setTimeout(showNextQueuedItem, preset.duration * 1000);
    }
    else {
        console.log('blackout');
        await blackout();
    }

    return new Promise(resolve => {
        resolve();
    })
}
export async function start() {
    await showNextQueuedItem();

    return new Promise(resolve => {
        resolve();
    })
}
export async function queue(preset, duration) {
    presetQueue.push({
        preset,
        duration
    });
}