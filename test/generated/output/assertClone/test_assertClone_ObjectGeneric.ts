import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";

export const test_assertClone_ObjectGeneric = _test_assertClone(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) =>
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
                const $guard = (typia.assertClone as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is [
                    ObjectGeneric.ISomething<boolean>,
                    ObjectGeneric.ISomething<number>,
                    ObjectGeneric.ISomething<string>,
                ] => {
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
                        (("object" === typeof input.child &&
                            null !== input.child) ||
                            $guard(_exceptionable, {
                                path: _path + ".child",
                                expected:
                                    "Resolve<ObjectGeneric.IChild<boolean, boolean>>",
                                value: input.child,
                            })) &&
                        $ao1(
                            input.child,
                            _path + ".child",
                            true && _exceptionable,
                        ) &&
                        (Array.isArray(input.elements) ||
                            $guard(_exceptionable, {
                                path: _path + ".elements",
                                expected:
                                    "Array<Resolve<ObjectGeneric.IChild<boolean, boolean>>>",
                                value: input.elements,
                            })) &&
                        input.elements.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".elements[" +
                                            _index1 +
                                            "]",
                                        expected:
                                            "Resolve<ObjectGeneric.IChild<boolean, boolean>>",
                                        value: elem,
                                    })) &&
                                $ao1(
                                    elem,
                                    _path + ".elements[" + _index1 + "]",
                                    true && _exceptionable,
                                ),
                        );
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
                        (("object" === typeof input.child &&
                            null !== input.child) ||
                            $guard(_exceptionable, {
                                path: _path + ".child",
                                expected:
                                    "Resolve<ObjectGeneric.IChild<number, number>>",
                                value: input.child,
                            })) &&
                        $ao3(
                            input.child,
                            _path + ".child",
                            true && _exceptionable,
                        ) &&
                        (Array.isArray(input.elements) ||
                            $guard(_exceptionable, {
                                path: _path + ".elements",
                                expected:
                                    "Array<Resolve<ObjectGeneric.IChild<number, number>>>",
                                value: input.elements,
                            })) &&
                        input.elements.every(
                            (elem: any, _index2: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".elements[" +
                                            _index2 +
                                            "]",
                                        expected:
                                            "Resolve<ObjectGeneric.IChild<number, number>>",
                                        value: elem,
                                    })) &&
                                $ao3(
                                    elem,
                                    _path + ".elements[" + _index2 + "]",
                                    true && _exceptionable,
                                ),
                        );
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
                        (("object" === typeof input.child &&
                            null !== input.child) ||
                            $guard(_exceptionable, {
                                path: _path + ".child",
                                expected:
                                    "Resolve<ObjectGeneric.IChild<string, string>>",
                                value: input.child,
                            })) &&
                        $ao5(
                            input.child,
                            _path + ".child",
                            true && _exceptionable,
                        ) &&
                        (Array.isArray(input.elements) ||
                            $guard(_exceptionable, {
                                path: _path + ".elements",
                                expected:
                                    "Array<Resolve<ObjectGeneric.IChild<string, string>>>",
                                value: input.elements,
                            })) &&
                        input.elements.every(
                            (elem: any, _index3: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".elements[" +
                                            _index3 +
                                            "]",
                                        expected:
                                            "Resolve<ObjectGeneric.IChild<string, string>>",
                                        value: elem,
                                    })) &&
                                $ao5(
                                    elem,
                                    _path + ".elements[" + _index3 + "]",
                                    true && _exceptionable,
                                ),
                        );
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
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "[Resolve<ObjectGeneric.ISomething<boolean>>, Resolve<ObjectGeneric.ISomething<number>>, Resolve<ObjectGeneric.ISomething<string>>]",
                                value: input,
                            })) &&
                        (input.length === 3 ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "[Resolve<ObjectGeneric.ISomething<boolean>>, Resolve<ObjectGeneric.ISomething<number>>, Resolve<ObjectGeneric.ISomething<string>>]",
                                value: input,
                            })) &&
                        (("object" === typeof input[0] && null !== input[0]) ||
                            $guard(true, {
                                path: _path + "[0]",
                                expected:
                                    "Resolve<ObjectGeneric.ISomething<boolean>>",
                                value: input[0],
                            })) &&
                        $ao0(input[0], _path + "[0]", true) &&
                        (("object" === typeof input[1] && null !== input[1]) ||
                            $guard(true, {
                                path: _path + "[1]",
                                expected:
                                    "Resolve<ObjectGeneric.ISomething<number>>",
                                value: input[1],
                            })) &&
                        $ao2(input[1], _path + "[1]", true) &&
                        (("object" === typeof input[2] && null !== input[2]) ||
                            $guard(true, {
                                path: _path + "[2]",
                                expected:
                                    "Resolve<ObjectGeneric.ISomething<string>>",
                                value: input[2],
                            })) &&
                        $ao4(input[2], _path + "[2]", true)
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
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    ObjectGeneric.SPOILERS,
);
