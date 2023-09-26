import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";

export const test_createValidateEquals_CommentTagArrayUnion =
    _test_validateEquals("CommentTagArrayUnion")<CommentTagArrayUnion>(
        CommentTagArrayUnion,
    )((input: any): typia.IValidation<CommentTagArrayUnion> => {
        const errors = [] as any[];
        const __is = (
            input: any,
            _exceptionable: boolean = true,
        ): input is CommentTagArrayUnion => {
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                Array.isArray(input.items) &&
                3 <= input.items.length &&
                input.items.length <= 3 &&
                input.items.every(
                    (elem: any, _index2: number) => "string" === typeof elem,
                ) &&
                Array.isArray(input.minItems) &&
                3 <= input.minItems.length &&
                input.minItems.every(
                    (elem: any, _index3: number) =>
                        "number" === typeof elem && Number.isFinite(elem),
                ) &&
                Array.isArray(input.maxItems) &&
                input.maxItems.length <= 7 &&
                input.maxItems.every(
                    (elem: any, _index4: number) =>
                        "string" === typeof elem ||
                        ("number" === typeof elem && Number.isFinite(elem)),
                ) &&
                Array.isArray(input.both) &&
                3 <= input.both.length &&
                input.both.length <= 7 &&
                input.both.every(
                    (elem: any, _index5: number) => "string" === typeof elem,
                ) &&
                (4 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            ["items", "minItems", "maxItems", "both"].some(
                                (prop: any) => key === prop,
                            )
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any, _index1: number) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        $io0(elem, true),
                )
            );
        };
        if (false === __is(input)) {
            const $report = (typia.createValidateEquals as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is CommentTagArrayUnion => {
                const $join = (typia.createValidateEquals as any).join;
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ((Array.isArray(input.items) ||
                            $report(_exceptionable, {
                                path: _path + ".items",
                                expected:
                                    "(Array<string> & MinItems<3> & MaxItems<3>)",
                                value: input.items,
                            })) &&
                            (3 <= input.items.length ||
                                $report(_exceptionable, {
                                    path: _path + ".items",
                                    expected: "Array<> & MinItems<3>",
                                    value: input.items,
                                })) &&
                            (input.items.length <= 3 ||
                                $report(_exceptionable, {
                                    path: _path + ".items",
                                    expected: "Array<> & MaxItems<3>",
                                    value: input.items,
                                })) &&
                            input.items
                                .map(
                                    (elem: any, _index2: number) =>
                                        "string" === typeof elem ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".items[" +
                                                _index2 +
                                                "]",
                                            expected: "string",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".items",
                                expected:
                                    "(Array<string> & MinItems<3> & MaxItems<3>)",
                                value: input.items,
                            }),
                        ((Array.isArray(input.minItems) ||
                            $report(_exceptionable, {
                                path: _path + ".minItems",
                                expected: "(Array<number> & MinItems<3>)",
                                value: input.minItems,
                            })) &&
                            (3 <= input.minItems.length ||
                                $report(_exceptionable, {
                                    path: _path + ".minItems",
                                    expected: "Array<> & MinItems<3>",
                                    value: input.minItems,
                                })) &&
                            input.minItems
                                .map(
                                    (elem: any, _index3: number) =>
                                        ("number" === typeof elem &&
                                            Number.isFinite(elem)) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".minItems[" +
                                                _index3 +
                                                "]",
                                            expected: "number",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".minItems",
                                expected: "(Array<number> & MinItems<3>)",
                                value: input.minItems,
                            }),
                        ((Array.isArray(input.maxItems) ||
                            $report(_exceptionable, {
                                path: _path + ".maxItems",
                                expected:
                                    "(Array<string | number> & MaxItems<7>)",
                                value: input.maxItems,
                            })) &&
                            (input.maxItems.length <= 7 ||
                                $report(_exceptionable, {
                                    path: _path + ".maxItems",
                                    expected: "Array<> & MaxItems<7>",
                                    value: input.maxItems,
                                })) &&
                            input.maxItems
                                .map(
                                    (elem: any, _index4: number) =>
                                        "string" === typeof elem ||
                                        ("number" === typeof elem &&
                                            Number.isFinite(elem)) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".maxItems[" +
                                                _index4 +
                                                "]",
                                            expected: "(number | string)",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".maxItems",
                                expected:
                                    "(Array<string | number> & MaxItems<7>)",
                                value: input.maxItems,
                            }),
                        ((Array.isArray(input.both) ||
                            $report(_exceptionable, {
                                path: _path + ".both",
                                expected:
                                    "(Array<string> & MinItems<3> & MaxItems<7>)",
                                value: input.both,
                            })) &&
                            (3 <= input.both.length ||
                                $report(_exceptionable, {
                                    path: _path + ".both",
                                    expected: "Array<> & MinItems<3>",
                                    value: input.both,
                                })) &&
                            (input.both.length <= 7 ||
                                $report(_exceptionable, {
                                    path: _path + ".both",
                                    expected: "Array<> & MaxItems<7>",
                                    value: input.both,
                                })) &&
                            input.both
                                .map(
                                    (elem: any, _index5: number) =>
                                        "string" === typeof elem ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".both[" +
                                                _index5 +
                                                "]",
                                            expected: "string",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".both",
                                expected:
                                    "(Array<string> & MinItems<3> & MaxItems<7>)",
                                value: input.both,
                            }),
                        4 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key: any) => {
                                    if (
                                        [
                                            "items",
                                            "minItems",
                                            "maxItems",
                                            "both",
                                        ].some((prop: any) => key === prop)
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
                            expected: "CommentTagArrayUnion",
                            value: input,
                        })) &&
                        input
                            .map(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "CommentTagArrayUnion.Type",
                                            value: elem,
                                        })) &&
                                        $vo0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        )) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "CommentTagArrayUnion.Type",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "CommentTagArrayUnion",
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
    });
