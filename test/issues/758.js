generator => {
    const $generator = typia_1.default.createRandom.generator;
    const $ro0 = (_recursive = false, _depth = 0) => ({
        string: (generator?.customs ?? $generator.customs)?.string?.([
            {
                name: "minLength",
                value: "32"
            },
            {
                name: "maxLength",
                value: "32"
            }
        ]) ?? (generator?.string ?? $generator.string)((generator?.integer ?? $generator.integer)(32, 32)),
        number: (generator?.customs ?? $generator.customs)?.number?.([
            {
                name: "minimum",
                value: "9"
            },
            {
                name: "maximum",
                value: "9"
            }
        ]) ?? (generator?.number ?? $generator.number)(9, 9),
        array: (generator?.array ?? $generator.array)(() => (generator?.customs ?? $generator.customs)?.number?.([
            {
                name: "minItems",
                value: "5"
            },
            {
                name: "maxItems",
                value: "5"
            },
            {
                name: "minimum",
                value: "5"
            },
            {
                name: "maximum",
                value: "5"
            }
        ]) ?? (generator?.number ?? $generator.number)(5, 5), (generator?.integer ?? $generator.integer)(5, 5))
    });
    return $ro0();
}