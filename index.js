const setMiddle = (string, element) => {
    if (!element) {
        return string;
    }

    const finalizeString = string => {
        if (string.props && string.props.children) {
            return finalizeString(string.props.children);
        }
        return string;
    }
    
    const finalString = finalizeString(string);

    const [ even, mid ] = finalString.length % 2 === 0 ? [true, (finalString.length / 2) - 1] : [false, Math.floor(finalString.length / 2)];
    const finalOutput = finalString.split('').reduce((result, char, ind) => {
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