import typia from "../../../../src";
import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_misc_createValidatePrune_CommentTagAtomicUnion =
    _test_misc_validatePrune("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
        CommentTagAtomicUnion,
    )((input: any): typia.IValidation<CommentTagAtomicUnion> => {
        const validate = (
            input: any,
        ): typia.IValidation<CommentTagAtomicUnion> => {
            const errors = [] as any[];
            const __is = (input: any): input is CommentTagAtomicUnion => {
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.value) &&
                    input.value.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    );
                const $io1 = (input: any): boolean =>
                    ("string" === typeof input.value &&
                        3 <= input.value.length &&
                        input.value.length <= 7) ||
                    ("number" === typeof input.value &&
                        Number.isFinite(input.value) &&
                        3 <= input.value);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input)) {
                const $report = (typia.misc.createValidatePrune as any).report(
                    errors,
                );
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is CommentTagAtomicUnion => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((Array.isArray(input.value) ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected:
                                        "Array<CommentTagAtomicUnion.Type>",
                                    value: input.value,
                                })) &&
                                input.value
                                    .map(
                                        (elem: any, _index1: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".value[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "CommentTagAtomicUnion.Type",
                                                    value: elem,
                                                })) &&
                                                $vo1(
                                                    elem,
                                                    _path +
                                                        ".value[" +
                                                        _index1 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".value[" +
                                                    _index1 +
                                                    "]",
                                                expected:
                                                    "CommentTagAtomicUnion.Type",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected:
                                        "Array<CommentTagAtomicUnion.Type>",
                                    value: input.value,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ("string" === typeof input.value &&
                                (3 <= input.value.length ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "string & MinLength<3>",
                                        value: input.value,
                                    })) &&
                                (input.value.length <= 7 ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "string & MaxLength<7>",
                                        value: input.value,
                                    }))) ||
                                ("number" === typeof input.value &&
                                    (Number.isFinite(input.value) ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected: "number",
                                            value: input.value,
                                        })) &&
                                    (3 <= input.value ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected: "number & Minimum<3>",
                                            value: input.value,
                                        }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected:
                                        "((number & Minimum<3>) | (string & MinLength<3> & MaxLength<7>))",
                                    value: input.value,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "CommentTagAtomicUnion",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "CommentTagAtomicUnion",
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
        const prune = (input: CommentTagAtomicUnion): void => {
            const $io1 = (input: any): boolean =>
                ("string" === typeof input.value &&
                    3 <= input.value.length &&
                    input.value.length <= 7) ||
                ("number" === typeof input.value && 3 <= input.value);
            const $pp0 = (input: any) =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po1(elem);
                });
            const $po0 = (input: any): any => {
                if (Array.isArray(input.value)) $pp0(input.value);
                for (const key of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            const $po1 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        const output = validate(input);
        if (output.success) prune(input);
        return output;
    });
