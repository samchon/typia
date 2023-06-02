import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_assertClone_DynamicUndefined = _test_assertClone(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) =>
        ((input: any): typia.Primitive<DynamicUndefined> => {
            const assert: any = (input: any): DynamicUndefined => {
                const __is: any = (input: any): input is DynamicUndefined => {
                    const $join: any = (typia.assertClone as any).join;
                    const $io0: any = (input: any): boolean =>
                        Object.keys(input).every((key: any) => {
                            const value: any = input[key];
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
                const $guard: any = (typia.assertClone as any).guard;
                const $join: any = (typia.assertClone as any).join;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is DynamicUndefined => {
                        const $ao0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            false === _exceptionable ||
                            Object.keys(input).every((key: any) => {
                                const value: any = input[key];
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
                                    expected: "DynamicUndefined",
                                    value: input,
                                })) &&
                            $ao0(input, _path + "", true)
                        );
                    })(input, "$input", true);
                return input;
            };
            const clone: any = (
                input: DynamicUndefined,
            ): typia.Primitive<DynamicUndefined> => {
                const $join: any = (typia.assertClone as any).join;
                const $co0: any = (input: any): any => {
                    const output: any = {} as any;
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
            const output: any = clone(input);
            return output;
        })(input),
    DynamicUndefined.SPOILERS,
);
