import typia from "../../../../src";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ObjectGeneric = _test_validateEquals(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) =>
        ((input: any): typia.IValidation<ObjectGeneric> => {
            const errors = [] as any[];
            const $report = (typia.validateEquals as any).report(errors);
            const $join = (typia.validateEquals as any).join;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectGeneric => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "boolean" === typeof input.value ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "boolean",
                                value: input.value,
                            }),
                        ((("object" === typeof input.child &&
                            null !== input.child) ||
                            $report(_exceptionable, {
                                path: _path + ".child",
                                expected:
                                    "Resolve<ObjectGeneric.IChild<boolean, boolean>>",
                                value: input.child,
                            })) &&
                            $vo1(
                                input.child,
                                _path + ".child",
                                true && _exceptionable,
                            )) ||
                            $report(_exceptionable, {
                                path: _path + ".child",
                                expected:
                                    "Resolve<ObjectGeneric.IChild<boolean, boolean>>",
                                value: input.child,
                            }),
                        ((Array.isArray(input.elements) ||
                            $report(_exceptionable, {
                                path: _path + ".elements",
                                expected:
                                    "Array<Resolve<ObjectGeneric.IChild<boolean, boolean>>>",
                                value: input.elements,
                            })) &&
                            input.elements
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".elements[" +
                                                    _index1 +
                                                    "]",
                                                expected:
                                                    "Resolve<ObjectGeneric.IChild<boolean, boolean>>",
                                                value: elem,
                                            })) &&
                                            $vo1(
                                                elem,
                                                _path +
                                                    ".elements[" +
                                                    _index1 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".elements[" +
                                                _index1 +
                                                "]",
                                            expected:
                                                "Resolve<ObjectGeneric.IChild<boolean, boolean>>",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".elements",
                                expected:
                                    "Array<Resolve<ObjectGeneric.IChild<boolean, boolean>>>",
                                value: input.elements,
                            }),
                        3 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (
                                        ["value", "child", "elements"].some(
                                            (prop) => key === prop,
                                        )
                                    )
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
                        "boolean" === typeof input.child_value ||
                            $report(_exceptionable, {
                                path: _path + ".child_value",
                                expected: "boolean",
                                value: input.child_value,
                            }),
                        "boolean" === typeof input.child_next ||
                            $report(_exceptionable, {
                                path: _path + ".child_next",
                                expected: "boolean",
                                value: input.child_next,
                            }),
                        2 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (
                                        ["child_value", "child_next"].some(
                                            (prop) => key === prop,
                                        )
                                    )
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
                        ("number" === typeof input.value &&
                            Number.isFinite(input.value)) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "number",
                                value: input.value,
                            }),
                        ((("object" === typeof input.child &&
                            null !== input.child) ||
                            $report(_exceptionable, {
                                path: _path + ".child",
                                expected:
                                    "Resolve<ObjectGeneric.IChild<number, number>>",
                                value: input.child,
                            })) &&
                            $vo3(
                                input.child,
                                _path + ".child",
                                true && _exceptionable,
                            )) ||
                            $report(_exceptionable, {
                                path: _path + ".child",
                                expected:
                                    "Resolve<ObjectGeneric.IChild<number, number>>",
                                value: input.child,
                            }),
                        ((Array.isArray(input.elements) ||
                            $report(_exceptionable, {
                                path: _path + ".elements",
                                expected:
                                    "Array<Resolve<ObjectGeneric.IChild<number, number>>>",
                                value: input.elements,
                            })) &&
                            input.elements
                                .map(
                                    (elem: any, _index2: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".elements[" +
                                                    _index2 +
                                                    "]",
                                                expected:
                                                    "Resolve<ObjectGeneric.IChild<number, number>>",
                                                value: elem,
                                            })) &&
                                            $vo3(
                                                elem,
                                                _path +
                                                    ".elements[" +
                                                    _index2 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".elements[" +
                                                _index2 +
                                                "]",
                                            expected:
                                                "Resolve<ObjectGeneric.IChild<number, number>>",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".elements",
                                expected:
                                    "Array<Resolve<ObjectGeneric.IChild<number, number>>>",
                                value: input.elements,
                            }),
                        3 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (
                                        ["value", "child", "elements"].some(
                                            (prop) => key === prop,
                                        )
                                    )
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
                        ("number" === typeof input.child_value &&
                            Number.isFinite(input.child_value)) ||
                            $report(_exceptionable, {
                                path: _path + ".child_value",
                                expected: "number",
                                value: input.child_value,
                            }),
                        ("number" === typeof input.child_next &&
                            Number.isFinite(input.child_next)) ||
                            $report(_exceptionable, {
                                path: _path + ".child_next",
                                expected: "number",
                                value: input.child_next,
                            }),
                        2 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (
                                        ["child_value", "child_next"].some(
                                            (prop) => key === prop,
                                        )
                                    )
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
                const $vo4 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "string" === typeof input.value ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "string",
                                value: input.value,
                            }),
                        ((("object" === typeof input.child &&
                            null !== input.child) ||
                            $report(_exceptionable, {
                                path: _path + ".child",
                                expected:
                                    "Resolve<ObjectGeneric.IChild<string, string>>",
                                value: input.child,
                            })) &&
                            $vo5(
                                input.child,
                                _path + ".child",
                                true && _exceptionable,
                            )) ||
                            $report(_exceptionable, {
                                path: _path + ".child",
                                expected:
                                    "Resolve<ObjectGeneric.IChild<string, string>>",
                                value: input.child,
                            }),
                        ((Array.isArray(input.elements) ||
                            $report(_exceptionable, {
                                path: _path + ".elements",
                                expected:
                                    "Array<Resolve<ObjectGeneric.IChild<string, string>>>",
                                value: input.elements,
                            })) &&
                            input.elements
                                .map(
                                    (elem: any, _index3: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".elements[" +
                                                    _index3 +
                                                    "]",
                                                expected:
                                                    "Resolve<ObjectGeneric.IChild<string, string>>",
                                                value: elem,
                                            })) &&
                                            $vo5(
                                                elem,
                                                _path +
                                                    ".elements[" +
                                                    _index3 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".elements[" +
                                                _index3 +
                                                "]",
                                            expected:
                                                "Resolve<ObjectGeneric.IChild<string, string>>",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".elements",
                                expected:
                                    "Array<Resolve<ObjectGeneric.IChild<string, string>>>",
                                value: input.elements,
                            }),
                        3 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (
                                        ["value", "child", "elements"].some(
                                            (prop) => key === prop,
                                        )
                                    )
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
                const $vo5 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "string" === typeof input.child_value ||
                            $report(_exceptionable, {
                                path: _path + ".child_value",
                                expected: "string",
                                value: input.child_value,
                            }),
                        "string" === typeof input.child_next ||
                            $report(_exceptionable, {
                                path: _path + ".child_next",
                                expected: "string",
                                value: input.child_next,
                            }),
                        2 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (
                                        ["child_value", "child_next"].some(
                                            (prop) => key === prop,
                                        )
                                    )
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
                                "[Resolve<ObjectGeneric.ISomething<boolean>>, Resolve<ObjectGeneric.ISomething<number>>, Resolve<ObjectGeneric.ISomething<string>>]",
                            value: input,
                        })) &&
                        (input.length === 3 ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "[Resolve<ObjectGeneric.ISomething<boolean>>, Resolve<ObjectGeneric.ISomething<number>>, Resolve<ObjectGeneric.ISomething<string>>]",
                                value: input,
                            })) &&
                        [
                            ((("object" === typeof input[0] &&
                                null !== input[0]) ||
                                $report(true, {
                                    path: _path + "[0]",
                                    expected:
                                        "Resolve<ObjectGeneric.ISomething<boolean>>",
                                    value: input[0],
                                })) &&
                                $vo0(input[0], _path + "[0]", true)) ||
                                $report(true, {
                                    path: _path + "[0]",
                                    expected:
                                        "Resolve<ObjectGeneric.ISomething<boolean>>",
                                    value: input[0],
                                }),
                            ((("object" === typeof input[1] &&
                                null !== input[1]) ||
                                $report(true, {
                                    path: _path + "[1]",
                                    expected:
                                        "Resolve<ObjectGeneric.ISomething<number>>",
                                    value: input[1],
                                })) &&
                                $vo2(input[1], _path + "[1]", true)) ||
                                $report(true, {
                                    path: _path + "[1]",
                                    expected:
                                        "Resolve<ObjectGeneric.ISomething<number>>",
                                    value: input[1],
                                }),
                            ((("object" === typeof input[2] &&
                                null !== input[2]) ||
                                $report(true, {
                                    path: _path + "[2]",
                                    expected:
                                        "Resolve<ObjectGeneric.ISomething<string>>",
                                    value: input[2],
                                })) &&
                                $vo4(input[2], _path + "[2]", true)) ||
                                $report(true, {
                                    path: _path + "[2]",
                                    expected:
                                        "Resolve<ObjectGeneric.ISomething<string>>",
                                    value: input[2],
                                }),
                        ].every((flag: boolean) => flag)) ||
                    $report(true, {
                        path: _path + "",
                        expected:
                            "[Resolve<ObjectGeneric.ISomething<boolean>>, Resolve<ObjectGeneric.ISomething<number>>, Resolve<ObjectGeneric.ISomething<string>>]",
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
