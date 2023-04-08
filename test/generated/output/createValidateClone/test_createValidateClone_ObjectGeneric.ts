import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";

export const test_createValidateClone_ObjectGeneric = _test_validateClone(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input: any): typia.IValidation<typia.Primitive<ObjectGeneric>> => {
        const validate = (input: any): typia.IValidation<ObjectGeneric> => {
            const __is = (input: any): input is ObjectGeneric => {
                const $io0 = (input: any): boolean =>
                    "boolean" === typeof input.value &&
                    "object" === typeof input.child &&
                    null !== input.child &&
                    "boolean" === typeof input.child.child_value &&
                    "boolean" === typeof input.child.child_next &&
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
                    "number" === typeof input.child.child_value &&
                    Number.isFinite(input.child.child_value) &&
                    "number" === typeof input.child.child_next &&
                    Number.isFinite(input.child.child_next) &&
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
                    "string" === typeof input.child.child_value &&
                    "string" === typeof input.child.child_next &&
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
            const errors = [] as any[];
            const $report = (typia.createValidateClone as any).report(errors);
            if (false === __is(input))
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
        };
        const clone = (
            input: ObjectGeneric,
        ): typia.Primitive<ObjectGeneric> => {
            const $io0 = (input: any): boolean =>
                "boolean" === typeof input.value &&
                "object" === typeof input.child &&
                null !== input.child &&
                $io1(input.child) &&
                Array.isArray(input.elements) &&
                input.elements.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
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
                        "object" === typeof elem && null !== elem && $io3(elem),
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
                        "object" === typeof elem && null !== elem && $io5(elem),
                );
            const $io5 = (input: any): boolean =>
                "string" === typeof input.child_value &&
                "string" === typeof input.child_next;
            const $co0 = (input: any): any => ({
                value: input.value as any,
                child:
                    "object" === typeof input.child && null !== input.child
                        ? $co1(input.child)
                        : (input.child as any),
                elements: Array.isArray(input.elements)
                    ? input.elements.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co1(elem)
                              : (elem as any),
                      )
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
                    ? input.elements.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co3(elem)
                              : (elem as any),
                      )
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
                    ? input.elements.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co5(elem)
                              : (elem as any),
                      )
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
        const output = validate(input) as any;
        if (output.success) output.data = clone(input);
        return output;
    },
    ObjectGeneric.SPOILERS,
);
