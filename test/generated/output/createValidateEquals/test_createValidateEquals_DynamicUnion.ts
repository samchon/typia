import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_createValidateEquals_DynamicUnion = _test_validateEquals(
    "DynamicUnion",
    DynamicUnion.generate,
    (input: any): typia.IValidation<DynamicUnion> => {
        const errors = [] as any[];
        const $report = (typia.createValidateEquals as any).report(errors);
        const $join = (typia.createValidateEquals as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is DynamicUnion => {
            const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    false === _exceptionable ||
                        Object.keys(input)
                            .map((key) => {
                                const value = input[key];
                                if (undefined === value) return true;
                                if (RegExp(/^-?\d+\.?\d*$/).test(key))
                                    return (
                                        "string" === typeof value ||
                                        $report(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "string",
                                            value: value,
                                        })
                                    );
                                if (RegExp(/^(prefix_(.*))/).test(key))
                                    return (
                                        "string" === typeof value ||
                                        $report(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "string",
                                            value: value,
                                        })
                                    );
                                if (RegExp(/((.*)_postfix)$/).test(key))
                                    return (
                                        "string" === typeof value ||
                                        $report(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "string",
                                            value: value,
                                        })
                                    );
                                if (
                                    RegExp(
                                        /^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/,
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
                                return $report(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "undefined",
                                    value: value,
                                });
                            })
                            .every((flag: boolean) => flag),
                ].every((flag: boolean) => flag);
            return (
                ((("object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Resolve<DynamicUnion>",
                        value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                $report(true, {
                    path: _path + "",
                    expected: "Resolve<DynamicUnion>",
                    value: input,
                })
            );
        })(input, "$input", true);
        const success = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as any;
    },
);
