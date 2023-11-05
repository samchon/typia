import typia from "../../../../src";
import { _test_json_validateParse } from "../../../internal/_test_json_validateParse";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_json_validateParse_DynamicUnion = _test_json_validateParse(
    "DynamicUnion",
)<DynamicUnion>(DynamicUnion)((input) =>
    ((input: string): typia.IValidation<typia.Primitive<DynamicUnion>> => {
        const validate = (input: any): typia.IValidation<DynamicUnion> => {
            const errors = [] as any[];
            const __is = (input: any): input is DynamicUnion => {
                const $io0 = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (
                            "number" === typeof Number(key) &&
                            Number.isFinite(Number(key))
                        )
                            return "string" === typeof value;
                        if (
                            "string" === typeof key &&
                            RegExp(/^prefix_(.*)/).test(key)
                        )
                            return "string" === typeof value;
                        if (
                            "string" === typeof key &&
                            RegExp(/(.*)_postfix$/).test(key)
                        )
                            return "string" === typeof value;
                        if (
                            "string" === typeof key &&
                            RegExp(
                                /^value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                            ).test(key)
                        )
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
            if (false === __is(input)) {
                const $report = (typia.json.validateParse as any).report(
                    errors,
                );
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is DynamicUnion => {
                    const $join = (typia.json.validateParse as any).join;
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            false === _exceptionable ||
                                Object.keys(input)
                                    .map((key: any) => {
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        if (
                                            "number" === typeof Number(key) &&
                                            Number.isFinite(Number(key))
                                        )
                                            return (
                                                "string" === typeof value ||
                                                $report(_exceptionable, {
                                                    path: _path + $join(key),
                                                    expected: "string",
                                                    value: value,
                                                })
                                            );
                                        if (
                                            "string" === typeof key &&
                                            RegExp(/^prefix_(.*)/).test(key)
                                        )
                                            return (
                                                "string" === typeof value ||
                                                $report(_exceptionable, {
                                                    path: _path + $join(key),
                                                    expected: "string",
                                                    value: value,
                                                })
                                            );
                                        if (
                                            "string" === typeof key &&
                                            RegExp(/(.*)_postfix$/).test(key)
                                        )
                                            return (
                                                "string" === typeof value ||
                                                $report(_exceptionable, {
                                                    path: _path + $join(key),
                                                    expected: "string",
                                                    value: value,
                                                })
                                            );
                                        if (
                                            "string" === typeof key &&
                                            RegExp(
                                                /^value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                                            ).test(key)
                                        )
                                            return (
                                                ("number" === typeof value &&
                                                    Number.isFinite(value)) ||
                                                $report(_exceptionable, {
                                                    path: _path + $join(key),
                                                    expected: "number",
                                                    value: value,
                                                })
                                            );
                                        return true;
                                    })
                                    .every((flag: boolean) => flag),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input &&
                            null !== input &&
                            false === Array.isArray(input)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "DynamicUnion",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "DynamicUnion",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            }
            const success = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        };
        const output = JSON.parse(input);
        return validate(output) as any;
    })(input),
);
