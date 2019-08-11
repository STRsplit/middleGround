const setMiddle = (string, element) => {
    if (!element) {
        return string;
    }
    const [ even, mid ] = string.length % 2 === 0 ? [true, (string.length / 2) - 1] : [false, Math.floor(string.length / 2)];
    const finalOutput = string.split('').reduce((result, char, ind) => {
        if (ind === mid) {
            result = even ? [ ...result, '\u00A0', element ] : [ ...result, element ];
        } else {
            result = [ ...result, '\u00A0' ];
        }
        return result;
    }, []);

    return finalOutput;
}

export { setMiddle }