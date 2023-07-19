import typia from "../../../../src";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";

export const test_misc_assertClone_ObjectGeneric =
    _test_misc_assertClone<ObjectGeneric>(ObjectGeneric)((input) =>
        ((
            input: any,
        ): typia.Primitive<
            [
                ObjectGeneric.ISomething<boolean>,
                ObjectGeneric.ISomething<number>,
                ObjectGeneric.ISomething<string>,
            ]
        > => {
            const assert = (
                input: any,
            ): [
                ObjectGeneric.ISomething<boolean>,
                ObjectGeneric.ISomething<number>,
                ObjectGeneric.ISomething<string>,
            ] => {
                const __is = (
                    input: any,
                ): input is [
                    ObjectGeneric.ISomething<boolean>,
                    ObjectGeneric.ISomething<number>,
                    ObjectGeneric.ISomething<string>,
                ] => {
                    const $io0 = (input: any): boolean =>
                        "boolean" === typeof input.value &&
                        "object" === typeof input.child &&
                        null !== input.child &&
                        "boolean" === typeof (input.child as any).child_value &&
                        "boolean" === typeof (input.child as any).child_next &&
                        Array.isArray(input.elements) &&
                        input.elements.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        );
                    const $io1 = (input: any): boolean =>
                        "boolean" === typeof input.child_value &&
                        "boolean" === typeof input.child_next;
                    const $io2 = (input: any): boolean =>
                        "number" === typeof input.value &&
                        Number.isFinite(input.value) &&
                        "object" === typeof input.child &&
                        null !== input.child &&
                        "number" === typeof (input.child as any).child_value &&
                        Number.isFinite((input.child as any).child_value) &&
                        "number" === typeof (input.child as any).child_next &&
                        Number.isFinite((input.child as any).child_next) &&
                        Array.isArray(input.elements) &&
                        input.elements.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io3(elem),
                        );
                    const $io3 = (input: any): boolean =>
                        "number" === typeof input.child_value &&
                        Number.isFinite(input.child_value) &&
                        "number" === typeof input.child_next &&
                        Number.isFinite(input.child_next);
                    const $io4 = (input: any): boolean =>
                        "string" === typeof input.value &&
                        "object" === typeof input.child &&
                        null !== input.child &&
                        "string" === typeof (input.child as any).child_value &&
                        "string" === typeof (input.child as any).child_next &&
                        Array.isArray(input.elements) &&
                        input.elements.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io5(elem),
                        );
                    const $io5 = (input: any): boolean =>
                        "string" === typeof input.child_value &&
                        "string" === typeof input.child_next;
                    return (
                        Array.isArray(input) &&
                        input.length === 3 &&
                        "object" === typeof input[0] &&
                        null !== input[0] &&
                        $io0(input[0]) &&
                        "object" === typeof input[1] &&
                        null !== input[1] &&
                        $io2(input[1]) &&
                        "object" === typeof input[2] &&
                        null !== input[2] &&
                        $io4(input[2])
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is [
                        ObjectGeneric.ISomething<boolean>,
                        ObjectGeneric.ISomething<number>,
                        ObjectGeneric.ISomething<string>,
                    ] => {
                        const $guard = (typia.misc.assertClone as any).guard;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ("boolean" === typeof input.value ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "boolean",
                                    value: input.value,
                                })) &&
                            (((("object" === typeof input.child &&
                                null !== input.child) ||
                                $guard(_exceptionable, {
                                    path: _path + ".child",
                                    expected:
                                        "ObjectGeneric.IChild<boolean, boolean>",
                                    value: input.child,
                                })) &&
                                $ao1(
                                    input.child,
                                    _path + ".child",
                                    true && _exceptionable,
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".child",
                                    expected:
                                        "ObjectGeneric.IChild<boolean, boolean>",
                                    value: input.child,
                                })) &&
                            (((Array.isArray(input.elements) ||
                                $guard(_exceptionable, {
                                    path: _path + ".elements",
                                    expected:
                                        "Array<ObjectGeneric.IChild<boolean, boolean>>",
                                    value: input.elements,
                                })) &&
                                input.elements.every(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".elements[" +
                                                    _index1 +
                                                    "]",
                                                expected:
                                                    "ObjectGeneric.IChild<boolean, boolean>",
                                                value: elem,
                                            })) &&
                                            $ao1(
                                                elem,
                                                _path +
                                                    ".elements[" +
                                                    _index1 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".elements[" +
                                                _index1 +
                                                "]",
                                            expected:
                                                "ObjectGeneric.IChild<boolean, boolean>",
                                            value: elem,
                                        }),
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".elements",
                                    expected:
                                        "Array<ObjectGeneric.IChild<boolean, boolean>>",
                                    value: input.elements,
                                }));
                        const $ao1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ("boolean" === typeof input.child_value ||
                                $guard(_exceptionable, {
                                    path: _path + ".child_value",
                                    expected: "boolean",
                                    value: input.child_value,
                                })) &&
                            ("boolean" === typeof input.child_next ||
                                $guard(_exceptionable, {
                                    path: _path + ".child_next",
                                    expected: "boolean",
                                    value: input.child_next,
                                }));
                        const $ao2 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("number" === typeof input.value &&
                                Number.isFinite(input.value)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "number",
                                    value: input.value,
                                })) &&
                            (((("object" === typeof input.child &&
                                null !== input.child) ||
                                $guard(_exceptionable, {
                                    path: _path + ".child",
                                    expected:
                                        "ObjectGeneric.IChild<number, number>",
                                    value: input.child,
                                })) &&
                                $ao3(
                                    input.child,
                                    _path + ".child",
                                    true && _exceptionable,
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".child",
                                    expected:
                                        "ObjectGeneric.IChild<number, number>",
                                    value: input.child,
                                })) &&
                            (((Array.isArray(input.elements) ||
                                $guard(_exceptionable, {
                                    path: _path + ".elements",
                                    expected:
                                        "Array<ObjectGeneric.IChild<number, number>>",
                                    value: input.elements,
                                })) &&
                                input.elements.every(
                                    (elem: any, _index2: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".elements[" +
                                                    _index2 +
                                                    "]",
                                                expected:
                                                    "ObjectGeneric.IChild<number, number>",
                                                value: elem,
                                            })) &&
                                            $ao3(
                                                elem,
                                                _path +
                                                    ".elements[" +
                                                    _index2 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".elements[" +
                                                _index2 +
                                                "]",
                                            expected:
                                                "ObjectGeneric.IChild<number, number>",
                                            value: elem,
                                        }),
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".elements",
                                    expected:
                                        "Array<ObjectGeneric.IChild<number, number>>",
                                    value: input.elements,
                                }));
                        const $ao3 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("number" === typeof input.child_value &&
                                Number.isFinite(input.child_value)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".child_value",
                                    expected: "number",
                                    value: input.child_value,
                                })) &&
                            (("number" === typeof input.child_next &&
                                Number.isFinite(input.child_next)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".child_next",
                                    expected: "number",
                                    value: input.child_next,
                                }));
                        const $ao4 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ("string" === typeof input.value ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "string",
                                    value: input.value,
                                })) &&
                            (((("object" === typeof input.child &&
                                null !== input.child) ||
                                $guard(_exceptionable, {
                                    path: _path + ".child",
                                    expected:
                                        "ObjectGeneric.IChild<string, string>",
                                    value: input.child,
                                })) &&
                                $ao5(
                                    input.child,
                                    _path + ".child",
                                    true && _exceptionable,
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".child",
                                    expected:
                                        "ObjectGeneric.IChild<string, string>",
                                    value: input.child,
                                })) &&
                            (((Array.isArray(input.elements) ||
                                $guard(_exceptionable, {
                                    path: _path + ".elements",
                                    expected:
                                        "Array<ObjectGeneric.IChild<string, string>>",
                                    value: input.elements,
                                })) &&
                                input.elements.every(
                                    (elem: any, _index3: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".elements[" +
                                                    _index3 +
                                                    "]",
                                                expected:
                                                    "ObjectGeneric.IChild<string, string>",
                                                value: elem,
                                            })) &&
                                            $ao5(
                                                elem,
                                                _path +
                                                    ".elements[" +
                                                    _index3 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".elements[" +
                                                _index3 +
                                                "]",
                                            expected:
                                                "ObjectGeneric.IChild<string, string>",
                                            value: elem,
                                        }),
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".elements",
                                    expected:
                                        "Array<ObjectGeneric.IChild<string, string>>",
                                    value: input.elements,
                                }));
                        const $ao5 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ("string" === typeof input.child_value ||
                                $guard(_exceptionable, {
                                    path: _path + ".child_value",
                                    expected: "string",
                                    value: input.child_value,
                                })) &&
                            ("string" === typeof input.child_next ||
                                $guard(_exceptionable, {
                                    path: _path + ".child_next",
                                    expected: "string",
                                    value: input.child_next,
                                }));
                        return (
                            ((Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ObjectGeneric",
                                    value: input,
                                })) &&
                                (input.length === 3 ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected:
                                            "[ObjectGeneric.ISomething<boolean>, ObjectGeneric.ISomething<number>, ObjectGeneric.ISomething<string>]",
                                        value: input,
                                    })) &&
                                (((("object" === typeof input[0] &&
                                    null !== input[0]) ||
                                    $guard(true, {
                                        path: _path + "[0]",
                                        expected:
                                            "ObjectGeneric.ISomething<boolean>",
                                        value: input[0],
                                    })) &&
                                    $ao0(input[0], _path + "[0]", true)) ||
                                    $guard(true, {
                                        path: _path + "[0]",
                                        expected:
                                            "ObjectGeneric.ISomething<boolean>",
                                        value: input[0],
                                    })) &&
                                (((("object" === typeof input[1] &&
                                    null !== input[1]) ||
                                    $guard(true, {
                                        path: _path + "[1]",
                                        expected:
                                            "ObjectGeneric.ISomething<number>",
                                        value: input[1],
                                    })) &&
                                    $ao2(input[1], _path + "[1]", true)) ||
                                    $guard(true, {
                                        path: _path + "[1]",
                                        expected:
                                            "ObjectGeneric.ISomething<number>",
                                        value: input[1],
                                    })) &&
                                (((("object" === typeof input[2] &&
                                    null !== input[2]) ||
                                    $guard(true, {
                                        path: _path + "[2]",
                                        expected:
                                            "ObjectGeneric.ISomething<string>",
                                        value: input[2],
                                    })) &&
                                    $ao4(input[2], _path + "[2]", true)) ||
                                    $guard(true, {
                                        path: _path + "[2]",
                                        expected:
                                            "ObjectGeneric.ISomething<string>",
                                        value: input[2],
                                    }))) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectGeneric",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const clone = (
                input: [
                    ObjectGeneric.ISomething<boolean>,
                    ObjectGeneric.ISomething<number>,
                    ObjectGeneric.ISomething<string>,
                ],
            ): typia.Primitive<
                [
                    ObjectGeneric.ISomething<boolean>,
                    ObjectGeneric.ISomething<number>,
                    ObjectGeneric.ISomething<string>,
                ]
            > => {
                const $io0 = (input: any): boolean =>
                    "boolean" === typeof input.value &&
                    "object" === typeof input.child &&
                    null !== input.child &&
                    $io1(input.child) &&
                    Array.isArray(input.elements) &&
                    input.elements.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    );
                const $io1 = (input: any): boolean =>
                    "boolean" === typeof input.child_value &&
                    "boolean" === typeof input.child_next;
                const $io2 = (input: any): boolean =>
                    "number" === typeof input.value &&
                    "object" === typeof input.child &&
                    null !== input.child &&
                    $io3(input.child) &&
                    Array.isArray(input.elements) &&
                    input.elements.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io3(elem),
                    );
                const $io3 = (input: any): boolean =>
                    "number" === typeof input.child_value &&
                    "number" === typeof input.child_next;
                const $io4 = (input: any): boolean =>
                    "string" === typeof input.value &&
                    "object" === typeof input.child &&
                    null !== input.child &&
                    $io5(input.child) &&
                    Array.isArray(input.elements) &&
                    input.elements.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io5(elem),
                    );
                const $io5 = (input: any): boolean =>
                    "string" === typeof input.child_value &&
                    "string" === typeof input.child_next;
                const $cp0 = (input: any) =>
                    input.map((elem: any) =>
                        "object" === typeof elem && null !== elem
                            ? $co1(elem)
                            : (elem as any),
                    );
                const $cp1 = (input: any) =>
                    input.map((elem: any) =>
                        "object" === typeof elem && null !== elem
                            ? $co3(elem)
                            : (elem as any),
                    );
                const $cp2 = (input: any) =>
                    input.map((elem: any) =>
                        "object" === typeof elem && null !== elem
                            ? $co5(elem)
                            : (elem as any),
                    );
                const $co0 = (input: any): any => ({
                    value: input.value as any,
                    child:
                        "object" === typeof input.child && null !== input.child
                            ? $co1(input.child)
                            : (input.child as any),
                    elements: Array.isArray(input.elements)
                        ? $cp0(input.elements)
                        : (input.elements as any),
                });
                const $co1 = (input: any): any => ({
                    child_value: input.child_value as any,
                    child_next: input.child_next as any,
                });
                const $co2 = (input: any): any => ({
                    value: input.value as any,
                    child:
                        "object" === typeof input.child && null !== input.child
                            ? $co3(input.child)
                            : (input.child as any),
                    elements: Array.isArray(input.elements)
                        ? $cp1(input.elements)
                        : (input.elements as any),
                });
                const $co3 = (input: any): any => ({
                    child_value: input.child_value as any,
                    child_next: input.child_next as any,
                });
                const $co4 = (input: any): any => ({
                    value: input.value as any,
                    child:
                        "object" === typeof input.child && null !== input.child
                            ? $co5(input.child)
                            : (input.child as any),
                    elements: Array.isArray(input.elements)
                        ? $cp2(input.elements)
                        : (input.elements as any),
                });
                const $co5 = (input: any): any => ({
                    child_value: input.child_value as any,
                    child_next: input.child_next as any,
                });
                return Array.isArray(input) &&
                    input.length === 3 &&
                    "object" === typeof input[0] &&
                    null !== input[0] &&
                    $io0(input[0]) &&
                    "object" === typeof input[1] &&
                    null !== input[1] &&
                    $io2(input[1]) &&
                    "object" === typeof input[2] &&
                    null !== input[2] &&
                    $io4(input[2])
                    ? ([
                          "object" === typeof input[0] && null !== input[0]
                              ? $co0(input[0])
                              : (input[0] as any),
                          "object" === typeof input[1] && null !== input[1]
                              ? $co2(input[1])
                              : (input[1] as any),
                          "object" === typeof input[2] && null !== input[2]
                              ? $co4(input[2])
                              : (input[2] as any),
                      ] as any)
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    );
