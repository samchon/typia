import typia from "../../../../src";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_misc_assertClone_DynamicSimple = _test_misc_assertClone(
    "DynamicSimple",
    DynamicSimple.generate,
    (input: any): typia.Primitive<DynamicSimple> => {
        const assert = (input: any): DynamicSimple => {
            const __is = (input: any): input is DynamicSimple => {
                const $join = (typia.misc.createAssertClone as any).join;
                const $io0 = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                "number" === typeof value &&
                                Number.isFinite(value)
                            );
                        return true;
                    });
                return (
                    "object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input) &&
                    $io0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is DynamicSimple => {
                    const $guard = (typia.misc.createAssertClone as any).guard;
                    const $join = (typia.misc.createAssertClone as any).join;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            const value = input[key];
                            if (undefined === value) return true;
                            if (RegExp(/(.*)/).test(key))
                                return (
                                    ("number" === typeof value &&
                                        Number.isFinite(value)) ||
                                    $guard(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "number",
                                        value: value,
                                    })
                                );
                            return true;
                        });
                    return (
                        ((("object" === typeof input &&
                            null !== input &&
                            false === Array.isArray(input)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "DynamicSimple",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "DynamicSimple",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const clone = (
            input: DynamicSimple,
        ): typia.Primitive<DynamicSimple> => {
            const $join = (typia.misc.createAssertClone as any).join;
            const $co0 = (input: any): any => {
                const output = {} as any;
                for (const [key, value] of Object.entries(input)) {
                    if (RegExp(/(.*)/).test(key)) {
                        output[key] = value as any;
                        continue;
                    }
                }
                return output;
            };
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        assert(input);
        const output = clone(input);
        return output;
    },
    DynamicSimple.SPOILERS,
);
