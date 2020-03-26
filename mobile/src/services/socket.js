import socketio from 'socket.io-client';

const socket = socketio('http://192.168.1.36:3333', {
    autoConnect: false,
})

function subscribeToNewDevs(subscribeFunction) {
    socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    };
    socket.connect();

}

function disconnect() {
    if (socketio.connected) {
        socketio.disconnect();
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs,
};