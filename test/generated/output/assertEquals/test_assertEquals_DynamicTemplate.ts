import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_assertEquals_DynamicTemplate = _test_assertEquals(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) =>
        ((input: any): DynamicTemplate => {
            const $guard = (typia.assertEquals as any).guard;
            const $join = (typia.assertEquals as any).join;
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
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
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
        })(input),
);
