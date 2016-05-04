const publishToWebsocket = (sendWebsocketMessage) => {
    let previousRelevantState;
    return (store) => (next) => (action) => {
        const result = next(action);
        const state = store.getState();

        const relevantState = {
            gameState: state.localGame,
            connected: state.remoteGame.connected
        }

        let changesPresent = !Object.is(previousRelevantState, relevantState)

        if (state.websocket.connected && changesPresent) {
            sendWebsocketMessage(relevantState)
            previousRelevantState = relevantState;
        }

        return result;
    }
}

export default publishToWebsocket;