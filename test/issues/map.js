(input) => {
    const $io0 = (input) =>
        input.boolean instanceof Map &&
        (() =>
            [...input.boolean].every(
                (elem) =>
                    Array.isArray(elem) &&
                    elem.length === 2 &&
                    "string" === typeof elem[0] &&
                    "boolean" === typeof elem[1],
            ))() &&
        input.int32 instanceof Map &&
        (() =>
            [...input.int32].every(
                (elem) =>
                    Array.isArray(elem) &&
                    elem.length === 2 &&
                    "string" === typeof elem[0] &&
                    "number" === typeof elem[1] &&
                    Number.isFinite(elem[1]) &&
                    Math.floor(elem[1]) === elem[1] &&
                    -2147483648 <= elem[1] &&
                    elem[1] <= 2147483647,
            ))() &&
        input.bigint instanceof Map &&
        (() =>
            [...input.bigint].every(
                (elem) =>
                    Array.isArray(elem) &&
                    elem.length === 2 &&
                    "string" === typeof elem[0] &&
                    "bigint" === typeof elem[1],
            ))() &&
        input.double instanceof Map &&
        (() =>
            [...input.double].every(
                (elem) =>
                    Array.isArray(elem) &&
                    elem.length === 2 &&
                    "string" === typeof elem[0] &&
                    "number" === typeof elem[1] &&
                    Number.isFinite(elem[1]),
            ))() &&
        input.string instanceof Map &&
        (() =>
            [...input.string].every(
                (elem) =>
                    Array.isArray(elem) &&
                    elem.length === 2 &&
                    "string" === typeof elem[0] &&
                    "string" === typeof elem[1] &&
                    1 <= elem[1].length,
            ))() &&
        input.bytes instanceof Map &&
        (() =>
            [...input.bytes].every(
                (elem) =>
                    Array.isArray(elem) &&
                    elem.length === 2 &&
                    "string" === typeof elem[0] &&
                    elem[1] instanceof Uint8Array,
            ))() &&
        input.objects instanceof Map &&
        (() =>
            [...input.objects].every(
                (elem) =>
                    Array.isArray(elem) &&
                    elem.length === 2 &&
                    "string" === typeof elem[0] &&
                    "object" === typeof elem[1] &&
                    null !== elem[1] &&
                    $io0(elem[1]),
            ))();
    return "object" === typeof input && null !== input && $io0(input);
};
