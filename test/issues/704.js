input => {
    const __is = input => {
        const $is_custom = typia_1.default.createAssert.is_custom;
        const $join = typia_1.default.createAssert.join;
        const $io0 = input => Array.isArray(input.list) && $is_custom("memberof", "array", "MyInterface", input.list) && input.list.every(elem => "object" === typeof elem && null !== elem && $io0(elem)) && Object.keys(input).every(key => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/(.*)/).test(key))
                return "number" === typeof value && Number.isFinite(value);
            return true;
        });
        return Array.isArray(input) && input.every(elem => "object" === typeof elem && null !== elem && $io0(elem));
    };
    if (false === __is(input))
        ((input, _path, _exceptionable = true) => {
            const $guard = typia_1.default.createAssert.guard;
            const $is_custom = typia_1.default.createAssert.is_custom;
            const $join = typia_1.default.createAssert.join;
            const $ao0 = (input, _path, _exceptionable = true) => ((Array.isArray(input.list) && ($is_custom("memberof", "array", "MyInterface", input.list) || $guard(_exceptionable, {
                path: _path + ".list",
                expected: "Array (@memberof MyInterface)",
                value: input.list
            })) || $guard(_exceptionable, {
                path: _path + ".list",
                expected: "Array<MyInterface>",
                value: input.list
            })) && input.list.every((elem, _index2) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
                path: _path + ".list[" + _index2 + "]",
                expected: "MyInterface",
                value: elem
            })) && $ao0(elem, _path + ".list[" + _index2 + "]", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + ".list[" + _index2 + "]",
                expected: "MyInterface",
                value: elem
            })) || $guard(_exceptionable, {
                path: _path + ".list",
                expected: "Array<MyInterface>",
                value: input.list
            })) && (false === _exceptionable || Object.keys(input).every(key => {
                const value = input[key];
                if (undefined === value)
                    return true;
                if (RegExp(/(.*)/).test(key))
                    return "number" === typeof value && Number.isFinite(value) || $guard(_exceptionable, {
                        path: _path + $join(key),
                        expected: "number",
                        value: value
                    });
                return true;
            }));
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "Array<MyInterface>",
                value: input
            })) && input.every((elem, _index1) => ("object" === typeof elem && null !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "MyInterface",
                value: elem
            })) && $ao0(elem, _path + "[" + _index1 + "]", true) || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "MyInterface",
                value: elem
            })) || $guard(true, {
                path: _path + "",
                expected: "Array<MyInterface>",
                value: input
            });
        })(input, "$input", true);
    return input;
}