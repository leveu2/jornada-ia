export default {
    jump: new KeyboardEvent('keydown', {key: 'Space', keyCode: 32}),
    dispatch(evente) {
        document.dispatchEvent(this[event]);
    }
}