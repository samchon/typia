input => {
    const $io0 = input => "string" === typeof input.id && "string" === typeof input.name && "number" === typeof input.age;
    const $throws = typia_1.default.misc.createClone.throws;
    const $cp0 = input => input.map(elem => elem);
    const $cp1 = input => input.map(elem => elem instanceof Set ? (() => {
        const array = [...elem];
        const top = elem.values().next().value;
        if (0 === elem.size)
            return new Set();
        const arrayPredicators = [
            [
                top => "boolean" === typeof top,
                entire => new Set(entire.map(elem => elem))
            ],
            [
                top => "number" === typeof top,
                entire => new Set(entire.map(elem => elem))
            ],
            [
                top => "string" === typeof top,
                entire => new Set(entire.map(elem => elem))
            ],
            [
                top => Array.isArray(top) && top.every(elem => "number" === typeof elem),
                entire => new Set(entire.map(elem => Array.isArray(elem) ? $cp0(elem) : elem))
            ],
            [
                top => "object" === typeof top && null !== top && $io0(top),
                entire => new Set(entire.map(elem => "object" === typeof elem && null !== elem ? $co0(elem) : elem))
            ]
        ];
        const passed = arrayPredicators.filter(pred => pred[0](top));
        if (1 === passed.length)
            return passed[0][1](array);
        else if (1 < passed.length)
            for (const pred of passed)
                if (array.every(value => true === pred[0](value)))
                    return pred[1](array);
        $throws({
            expected: "(Set<boolean> | Set<number> | Set<string> | Set<Array<number>> | Set<SetUnion.Person>)",
            value: elem
        });
    })() : elem);
    const $co0 = input => ({
        id: input.id,
        name: input.name,
        age: input.age
    });
    return Array.isArray(input) ? $cp1(input) : input;
}