export function removePunctuation(str) {
    return str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
}

export async function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve() }, ms)
    })
}