import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_createAssertClone_DynamicNever = _test_assertClone(
    "DynamicNever",
    DynamicNever.generate,
    (input: any): typia.Primitive<DynamicNever> => {
        const assert = (input: any): DynamicNever => {
            const $guard = (typia.createAssertClone as any).guard;
            const $join = (typia.createAssertClone as any).join;
            const __is = (input: any): input is DynamicNever => {
                const $join = (typia.createAssertClone as any).join;
                const $io0 = (input: any): boolean =>
                    Object.keys(input).every((key) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return null !== value && undefined === value;
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
                ): input is DynamicNever => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        false === _exceptionable ||
                        Object.keys(input).every((key) => {
                            const value = input[key];
                            if (undefined === value) return true;
                            if (RegExp(/(.*)/).test(key))
                                return (
                                    (null !== value ||
                                        $guard(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "undefined",
                                            value: value,
                                        })) &&
                                    (undefined === value ||
                                        $guard(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "undefined",
                                            value: value,
                                        }))
                                );
                            return true;
                        });
                    return (
                        (("object" === typeof input &&
                            null !== input &&
                            false === Array.isArray(input)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "Resolve<DynamicNever>",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
            return input;
        };
        const clone = (input: DynamicNever): typia.Primitive<DynamicNever> => {
            const $join = (typia.createAssertClone as any).join;
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
    DynamicNever.SPOILERS,
);
