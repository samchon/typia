import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_createValidateClone_TemplateUnion = _test_validateClone(
    "TemplateUnion",
    TemplateUnion.generate,
    (input: any): typia.IValidation<typia.Primitive<TemplateUnion>> => {
        const validate = (input: any): typia.IValidation<TemplateUnion> => {
            const errors = [] as any[];
            const $report = (typia.createValidateClone as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TemplateUnion => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("string" === typeof input.prefix &&
                            (true ===
                                RegExp(/^prefix_(.*)/).test(input.prefix) ||
                                true ===
                                    RegExp(/^prefix_-?\d+\.?\d*$/).test(
                                        input.prefix,
                                    ))) ||
                            $report(_exceptionable, {
                                path: _path + ".prefix",
                                expected:
                                    "(`prefix_${number}` | `prefix_${string}`)",
                                value: input.prefix,
                            }),
                        ("string" === typeof input.postfix &&
                            (true ===
                                RegExp(/(.*)_postfix$/).test(input.postfix) ||
                                true ===
                                    RegExp(/^-?\d+\.?\d*_postfix$/).test(
                                        input.postfix,
                                    ))) ||
                            $report(_exceptionable, {
                                path: _path + ".postfix",
                                expected:
                                    "(`${number}_postfix` | `${string}_postfix`)",
                                value: input.postfix,
                            }),
                        "the_false_value" === input.middle ||
                            "the_true_value" === input.middle ||
                            ("string" === typeof input.middle &&
                                true ===
                                    RegExp(/^the_-?\d+\.?\d*_value$/).test(
                                        input.middle,
                                    )) ||
                            $report(_exceptionable, {
                                path: _path + ".middle",
                                expected:
                                    '("the_false_value" | "the_true_value" | `the_${number}_value`)',
                                value: input.middle,
                            }),
                        (null !== input.mixed ||
                            $report(_exceptionable, {
                                path: _path + ".mixed",
                                expected:
                                    '("the_A_value" | "the_B_value" | Resolve<__type> | `the_${number}_value` | boolean | number)',
                                value: input.mixed,
                            })) &&
                            (undefined !== input.mixed ||
                                $report(_exceptionable, {
                                    path: _path + ".mixed",
                                    expected:
                                        '("the_A_value" | "the_B_value" | Resolve<__type> | `the_${number}_value` | boolean | number)',
                                    value: input.mixed,
                                })) &&
                            ("the_A_value" === input.mixed ||
                                "the_B_value" === input.mixed ||
                                ("number" === typeof input.mixed &&
                                    Number.isFinite(input.mixed)) ||
                                "boolean" === typeof input.mixed ||
                                ("string" === typeof input.mixed &&
                                    true ===
                                        RegExp(/^the_-?\d+\.?\d*_value$/).test(
                                            input.mixed,
                                        )) ||
                                ((("object" === typeof input.mixed &&
                                    null !== input.mixed) ||
                                    $report(_exceptionable, {
                                        path: _path + ".mixed",
                                        expected:
                                            '("the_A_value" | "the_B_value" | Resolve<__type> | `the_${number}_value` | boolean | number)',
                                        value: input.mixed,
                                    })) &&
                                    $vo1(
                                        input.mixed,
                                        _path + ".mixed",
                                        true && _exceptionable,
                                    )) ||
                                $report(_exceptionable, {
                                    path: _path + ".mixed",
                                    expected:
                                        '("the_A_value" | "the_B_value" | Resolve<__type> | `the_${number}_value` | boolean | number)',
                                    value: input.mixed,
                                })),
                    ].every((flag: boolean) => flag);
                const $vo1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "string" === typeof input.name ||
                            $report(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            }),
                    ].every((flag: boolean) => flag);
                return (
                    ((Array.isArray(input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Array<Resolve<TemplateUnion.Type>>",
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
                                                "Resolve<TemplateUnion.Type>",
                                            value: elem,
                                        })) &&
                                        $vo0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        )) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "Resolve<TemplateUnion.Type>",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Array<Resolve<TemplateUnion.Type>>",
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
            input: TemplateUnion,
        ): typia.Primitive<TemplateUnion> => {
            const $io1 = (input: any): boolean =>
                "string" === typeof input.name;
            const $co0 = (input: any): any => ({
                prefix: input.prefix as any,
                postfix: input.postfix as any,
                middle: input.middle as any,
                mixed:
                    "object" === typeof input.mixed && null !== input.mixed
                        ? $co1(input.mixed)
                        : (input.mixed as any),
            });
            const $co1 = (input: any): any => ({
                name: input.name as any,
            });
            return Array.isArray(input)
                ? input.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $co0(elem)
                          : (elem as any),
                  )
                : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = clone(input);
        return output;
    },
    TemplateUnion.SPOILERS,
);
