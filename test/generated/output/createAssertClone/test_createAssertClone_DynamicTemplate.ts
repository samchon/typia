import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_createAssertClone_DynamicTemplate = _test_assertClone(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input: any): typia.Primitive<DynamicTemplate> => {
        const assert = (input: any): DynamicTemplate => {
            const $guard = (typia.createAssertClone as any).guard;
            const $join = (typia.createAssertClone as any).join;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is DynamicTemplate => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/^(prefix_(.*))/).test(key))
                            return (
                                "string" === typeof value ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "string",
                                    value: value,
                                })
                            );
                        if (RegExp(/((.*)_postfix)$/).test(key))
                            return (
                                "string" === typeof value ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "string",
                                    value: value,
                                })
                            );
                        if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
                            return (
                                ("number" === typeof value &&
                                    Number.isFinite(value)) ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "number",
                                    value: value,
                                })
                            );
                        if (
                            RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key)
                        )
                            return (
                                "boolean" === typeof value ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "boolean",
                                    value: value,
                                })
                            );
                        return true;
                    });
                return (
                    (("object" === typeof input &&
                        null !== input &&
                        false === Array.isArray(input)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Resolve<DynamicTemplate>",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
            return input;
        };
        const clone = (
            input: DynamicTemplate,
        ): typia.Primitive<DynamicTemplate> => {
            const $join = (typia.createAssertClone as any).join;
            const $co0 = (input: any): any => {
                const output = {} as any;
                for (const [key, value] of Object.entries(input)) {
                    if (RegExp(/^(prefix_(.*))/).test(key)) {
                        output[key] = value as any;
                        continue;
                    }
                    if (RegExp(/((.*)_postfix)$/).test(key)) {
                        output[key] = value as any;
                        continue;
                    }
                    if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key)) {
                        output[key] = value as any;
                        continue;
                    }
                    if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key)) {
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
    DynamicTemplate.SPOILERS,
);
