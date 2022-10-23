const is = (input) => {
    const $io = [
        (input) =>
            "number" === typeof input.x && 
            "number" === typeof input.y,
        (input) =>
            "number" === typeof input.x &&
            "number" === typeof input.y &&
            "number" === typeof input.z,
    ];
    const $iu = [
        (input) =>
            (() => {
                if (undefined !== input.z) 
                    return $io[1](input);
                return $io[0](input);
            })(),
    ];
    return (
        null !== input &&
        "object" === typeof input &&
        null !== input &&
        $iu[0](input)
    );
};