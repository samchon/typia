import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_createValidateEquals_TagAtomicUnion = _test_validateEquals(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input: any): typia.IValidation<TagAtomicUnion> => {
        const __is: any = (
            input: any,
            _exceptionable: boolean = true,
        ): input is TagAtomicUnion => {
            const $io0: any = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                (("string" === typeof input.value &&
                    3 <= input.value.length &&
                    7 >= input.value.length) ||
                    ("number" === typeof input.value &&
                        Number.isFinite(input.value) &&
                        3 <= input.value)) &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (["value"].some((prop: any) => key === prop))
                            return true;
                        const value: any = input[key];
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
        const errors: any = [] as any[];
        const $report: any = (typia.createValidateEquals as any).report(errors);
        const $join: any = (typia.createValidateEquals as any).join;
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagAtomicUnion => {
                const $vo0: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("string" === typeof input.value &&
                            (3 <= input.value.length ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "string (@minLength 3)",
                                    value: input.value,
                                })) &&
                            (7 >= input.value.length ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "string (@maxLength 7)",
                                    value: input.value,
                                }))) ||
                            ("number" === typeof input.value &&
                                Number.isFinite(input.value) &&
                                (3 <= input.value ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "number (@minimum 3)",
                                        value: input.value,
                                    }))) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "(number | string)",
                                value: input.value,
                            }),
                        1 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key: any) => {
                                    if (
                                        ["value"].some(
                                            (prop: any) => key === prop,
                                        )
                                    )
                                        return true;
                                    const value: any = input[key];
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
                            expected: "TagAtomicUnion",
                            value: input,
                        })) &&
                        input
                            .map(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "TagAtomicUnion.Type",
                                            value: elem,
                                        })) &&
                                        $vo0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        )) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "TagAtomicUnion.Type",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "TagAtomicUnion",
                        value: input,
                    })
                );
            })(input, "$input", true);
        const success: any = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as any;
    },
);
