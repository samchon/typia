import typia from "../../../../src";
import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";

export const test_misc_validatePrune_TagObjectUnion = _test_misc_validatePrune(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input: any): typia.IValidation<TagObjectUnion> => {
        const validate = (input: any): typia.IValidation<TagObjectUnion> => {
            const errors = [] as any[];
            const __is = (input: any): input is TagObjectUnion => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.value &&
                    Number.isFinite(input.value) &&
                    3 <= input.value;
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.value &&
                    3 <= input.value.length &&
                    7 >= input.value.length;
                const $iu0 = (input: any): any =>
                    (() => {
                        if ("string" === typeof input.value) return $io1(input);
                        if (
                            "number" === typeof input.value &&
                            Number.isFinite(input.value)
                        )
                            return $io0(input);
                        return false;
                    })();
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $iu0(elem),
                    )
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
                ): input is TagObjectUnion => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
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
                                    expected: "number",
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
                                        expected: "string (@minLength 3)",
                                        value: input.value,
                                    })) &&
                                (7 >= input.value.length ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "string (@maxLength 7)",
                                        value: input.value,
                                    }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "string",
                                    value: input.value,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vu0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if ("string" === typeof input.value)
                                return $vo1(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("number" === typeof input.value)
                                return $vo0(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            return $report(_exceptionable, {
                                path: _path,
                                expected:
                                    "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
                                value: input,
                            });
                        })();
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "TagObjectUnion",
                                value: input,
                            })) &&
                            input
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
                                                value: elem,
                                            })) &&
                                            $vu0(
                                                elem,
                                                _path + "[" + _index1 + "]",
                                                true,
                                            )) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "TagObjectUnion",
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
        const prune = (input: TagObjectUnion): void => {
            const $io0 = (input: any): boolean =>
                "number" === typeof input.value && 3 <= input.value;
            const $io1 = (input: any): boolean =>
                "string" === typeof input.value &&
                3 <= input.value.length &&
                7 >= input.value.length;
            const $throws = (typia.misc.createValidatePrune as any).throws;
            const $pp0 = (input: any) =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $pu0(elem);
                });
            const $po0 = (input: any): any => {
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
            const $pu0 = (input: any): any =>
                (() => {
                    if ("string" === typeof input.value) return $po1(input);
                    if ("number" === typeof input.value) return $po0(input);
                    $throws({
                        expected:
                            "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
                        value: input,
                    });
                })();
            if (Array.isArray(input)) $pp0(input);
        };
        const output = validate(input);
        if (output.success) prune(input);
        return output;
    },
    TagObjectUnion.SPOILERS,
);
