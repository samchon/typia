import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ToJsonArray } from "../../../structures/ToJsonArray";

export const test_validateEquals_ToJsonArray = _test_validateEquals(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) =>
        ((
            input: any,
        ): typia.IValidation<
            [
                ToJsonArray.IArray<boolean>,
                ToJsonArray.IArray<number>,
                ToJsonArray.IArray<string>,
                ToJsonArray.IArray<ToJsonArray.IObject>,
            ]
        > => {
            const errors = [] as any[];
            const $report = (typia.validateEquals as any).report(errors);
            const $join = (typia.validateEquals as any).join;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is [
                ToJsonArray.IArray<boolean>,
                ToJsonArray.IArray<number>,
                ToJsonArray.IArray<string>,
                ToJsonArray.IArray<ToJsonArray.IObject>,
            ] => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "function" === typeof input.toJSON ||
                            $report(_exceptionable, {
                                path: _path + ".toJSON",
                                expected: "unknown",
                                value: input.toJSON,
                            }),
                        1 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (["toJSON"].some((prop) => key === prop))
                                        return true;
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    return $report(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    });
                                })
                                .every((flag: boolean) => flag),
                    ].every((flag: boolean) => flag);
                const $vo1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "function" === typeof input.toJSON ||
                            $report(_exceptionable, {
                                path: _path + ".toJSON",
                                expected: "unknown",
                                value: input.toJSON,
                            }),
                        1 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (["toJSON"].some((prop) => key === prop))
                                        return true;
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    return $report(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    });
                                })
                                .every((flag: boolean) => flag),
                    ].every((flag: boolean) => flag);
                const $vo2 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "function" === typeof input.toJSON ||
                            $report(_exceptionable, {
                                path: _path + ".toJSON",
                                expected: "unknown",
                                value: input.toJSON,
                            }),
                        1 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (["toJSON"].some((prop) => key === prop))
                                        return true;
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    return $report(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    });
                                })
                                .every((flag: boolean) => flag),
                    ].every((flag: boolean) => flag);
                const $vo3 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "function" === typeof input.toJSON ||
                            $report(_exceptionable, {
                                path: _path + ".toJSON",
                                expected: "unknown",
                                value: input.toJSON,
                            }),
                        1 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (["toJSON"].some((prop) => key === prop))
                                        return true;
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    return $report(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    });
                                })
                                .every((flag: boolean) => flag),
                    ].every((flag: boolean) => flag);
                return (
                    ((Array.isArray(input) ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                "[Resolve<ToJsonArray.IArray<boolean>>, Resolve<ToJsonArray.IArray<number>>, Resolve<ToJsonArray.IArray<string>>, Resolve<ToJsonArray.IArray<ToJsonArray.IObject>>]",
                            value: input,
                        })) &&
                        (input.length === 4 ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "[Resolve<ToJsonArray.IArray<boolean>>, Resolve<ToJsonArray.IArray<number>>, Resolve<ToJsonArray.IArray<string>>, Resolve<ToJsonArray.IArray<ToJsonArray.IObject>>]",
                                value: input,
                            })) &&
                        [
                            ((("object" === typeof input[0] &&
                                null !== input[0]) ||
                                $report(true, {
                                    path: _path + "[0]",
                                    expected:
                                        "Resolve<ToJsonArray.IArray<boolean>>",
                                    value: input[0],
                                })) &&
                                $vo0(input[0], _path + "[0]", true)) ||
                                $report(true, {
                                    path: _path + "[0]",
                                    expected:
                                        "Resolve<ToJsonArray.IArray<boolean>>",
                                    value: input[0],
                                }),
                            ((("object" === typeof input[1] &&
                                null !== input[1]) ||
                                $report(true, {
                                    path: _path + "[1]",
                                    expected:
                                        "Resolve<ToJsonArray.IArray<number>>",
                                    value: input[1],
                                })) &&
                                $vo1(input[1], _path + "[1]", true)) ||
                                $report(true, {
                                    path: _path + "[1]",
                                    expected:
                                        "Resolve<ToJsonArray.IArray<number>>",
                                    value: input[1],
                                }),
                            ((("object" === typeof input[2] &&
                                null !== input[2]) ||
                                $report(true, {
                                    path: _path + "[2]",
                                    expected:
                                        "Resolve<ToJsonArray.IArray<string>>",
                                    value: input[2],
                                })) &&
                                $vo2(input[2], _path + "[2]", true)) ||
                                $report(true, {
                                    path: _path + "[2]",
                                    expected:
                                        "Resolve<ToJsonArray.IArray<string>>",
                                    value: input[2],
                                }),
                            ((("object" === typeof input[3] &&
                                null !== input[3]) ||
                                $report(true, {
                                    path: _path + "[3]",
                                    expected:
                                        "Resolve<ToJsonArray.IArray<ToJsonArray.IObject>>",
                                    value: input[3],
                                })) &&
                                $vo3(input[3], _path + "[3]", true)) ||
                                $report(true, {
                                    path: _path + "[3]",
                                    expected:
                                        "Resolve<ToJsonArray.IArray<ToJsonArray.IObject>>",
                                    value: input[3],
                                }),
                        ].every((flag: boolean) => flag)) ||
                    $report(true, {
                        path: _path + "",
                        expected:
                            "[Resolve<ToJsonArray.IArray<boolean>>, Resolve<ToJsonArray.IArray<number>>, Resolve<ToJsonArray.IArray<string>>, Resolve<ToJsonArray.IArray<ToJsonArray.IObject>>]",
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
        })(input),
);
