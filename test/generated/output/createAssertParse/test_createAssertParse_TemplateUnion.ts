import typia from "../../../../src";
import { _test_assertParse } from "../../../internal/_test_assertParse";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_createAssertParse_TemplateUnion = _test_assertParse(
    "TemplateUnion",
    TemplateUnion.generate,
    (input: string): typia.Primitive<TemplateUnion> => {
        const assert = (input: any): TemplateUnion => {
            const $guard = (typia.createAssertParse as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TemplateUnion => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("string" === typeof input.prefix &&
                        (true === RegExp(/^prefix_(.*)/).test(input.prefix) ||
                            true ===
                                RegExp(/^prefix_-?\d+\.?\d*$/).test(
                                    input.prefix,
                                ))) ||
                        $guard(_exceptionable, {
                            path: _path + ".prefix",
                            expected:
                                "(`prefix_${number}` | `prefix_${string}`)",
                            value: input.prefix,
                        })) &&
                    (("string" === typeof input.postfix &&
                        (true === RegExp(/(.*)_postfix$/).test(input.postfix) ||
                            true ===
                                RegExp(/^-?\d+\.?\d*_postfix$/).test(
                                    input.postfix,
                                ))) ||
                        $guard(_exceptionable, {
                            path: _path + ".postfix",
                            expected:
                                "(`${number}_postfix` | `${string}_postfix`)",
                            value: input.postfix,
                        })) &&
                    ("the_false_value" === input.middle ||
                        "the_true_value" === input.middle ||
                        ("string" === typeof input.middle &&
                            true ===
                                RegExp(/^the_-?\d+\.?\d*_value$/).test(
                                    input.middle,
                                )) ||
                        $guard(_exceptionable, {
                            path: _path + ".middle",
                            expected:
                                '("the_false_value" | "the_true_value" | `the_${number}_value`)',
                            value: input.middle,
                        })) &&
                    (null !== input.mixed ||
                        $guard(_exceptionable, {
                            path: _path + ".mixed",
                            expected:
                                '("the_A_value" | "the_B_value" | Resolve<__type> | `the_${number}_value` | boolean | number)',
                            value: input.mixed,
                        })) &&
                    (undefined !== input.mixed ||
                        $guard(_exceptionable, {
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
                            $guard(_exceptionable, {
                                path: _path + ".mixed",
                                expected:
                                    '("the_A_value" | "the_B_value" | Resolve<__type> | `the_${number}_value` | boolean | number)',
                                value: input.mixed,
                            })) &&
                            $ao1(
                                input.mixed,
                                _path + ".mixed",
                                true && _exceptionable,
                            )));
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "string" === typeof input.name ||
                    $guard(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                    });
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Array<Resolve<TemplateUnion.Type>>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "Resolve<TemplateUnion.Type>",
                                    value: elem,
                                })) &&
                            $ao0(elem, _path + "[" + _index1 + "]", true),
                    )
                );
            })(input, "$input", true);
            return input;
        };
        input = JSON.parse(input);
        return assert(input);
    },
    TemplateUnion.SPOILERS,
);
