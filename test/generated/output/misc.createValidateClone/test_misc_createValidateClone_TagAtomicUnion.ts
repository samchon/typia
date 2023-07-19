import typia from "../../../../src";
import { _test_misc_validateClone } from "../../../internal/_test_misc_validateClone";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_misc_validateClone_TagAtomicUnion =
    _test_misc_validateClone<TagAtomicUnion>(TagAtomicUnion)(
        (input: any): typia.IValidation<typia.Primitive<TagAtomicUnion>> => {
            const validate = (
                input: any,
            ): typia.IValidation<TagAtomicUnion> => {
                const errors = [] as any[];
                const __is = (input: any): input is TagAtomicUnion => {
                    const $io0 = (input: any): boolean =>
                        ("string" === typeof input.value &&
                            3 <= input.value.length &&
                            7 >= input.value.length) ||
                        ("number" === typeof input.value &&
                            Number.isFinite(input.value) &&
                            3 <= input.value);
                    return (
                        Array.isArray(input) &&
                        input.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io0(elem),
                        )
                    );
                };
                if (false === __is(input)) {
                    const $report = (
                        typia.misc.createValidateClone as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TagAtomicUnion => {
                        const $vo0 = (
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
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "TagAtomicUnion.Type",
                                                    value: elem,
                                                })) &&
                                                $vo0(
                                                    elem,
                                                    _path + "[" + _index1 + "]",
                                                    true,
                                                )) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
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
                }
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const clone = (
                input: TagAtomicUnion,
            ): typia.Primitive<TagAtomicUnion> => {
                const $cp0 = (input: any) =>
                    input.map((elem: any) =>
                        "object" === typeof elem && null !== elem
                            ? $co0(elem)
                            : (elem as any),
                    );
                const $co0 = (input: any): any => ({
                    value: input.value as any,
                });
                return Array.isArray(input) ? $cp0(input) : (input as any);
            };
            const output = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        },
    );
