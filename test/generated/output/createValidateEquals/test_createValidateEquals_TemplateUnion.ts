import typia from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_validateEquals } from "../internal/_test_validateEquals";
export const test_createValidateEquals_TemplateUnion = _test_validateEquals("TemplateUnion", TemplateUnion.generate, (input: any): typia.IValidation<TemplateUnion> => {
    const errors = [] as any[];
    const $report = (typia.createValidateEquals as any).report(errors);
    const $join = (typia.createValidateEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is TemplateUnion => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.prefix && (true === RegExp(/^prefix_(.*)/).test(input.prefix) || true === RegExp(/^prefix_-?\d+\.?\d*$/).test(input.prefix)) || $report(_exceptionable, {
                path: _path + ".prefix",
                expected: "(`prefix_${number}` | `prefix_${string}`)",
                value: input.prefix
            }), "string" === typeof input.postfix && (true === RegExp(/(.*)_postfix$/).test(input.postfix) || true === RegExp(/^-?\d+\.?\d*_postfix$/).test(input.postfix)) || $report(_exceptionable, {
                path: _path + ".postfix",
                expected: "(`${number}_postfix` | `${string}_postfix`)",
                value: input.postfix
            }), "the_false_value" === input.middle || "the_true_value" === input.middle || "string" === typeof input.middle && true === RegExp(/^the_-?\d+\.?\d*_value$/).test(input.middle) || $report(_exceptionable, {
                path: _path + ".middle",
                expected: "(\"the_false_value\" | \"the_true_value\" | `the_${number}_value`)",
                value: input.middle
            }), (null !== input.mixed || $report(_exceptionable, {
                path: _path + ".mixed",
                expected: "(\"the_A_value\" | \"the_B_value\" | Resolve<__type> | `the_${number}_value` | boolean | number)",
                value: input.mixed
            })) && (undefined !== input.mixed || $report(_exceptionable, {
                path: _path + ".mixed",
                expected: "(\"the_A_value\" | \"the_B_value\" | Resolve<__type> | `the_${number}_value` | boolean | number)",
                value: input.mixed
            })) && ("the_A_value" === input.mixed || "the_B_value" === input.mixed || "number" === typeof input.mixed || "boolean" === typeof input.mixed || "string" === typeof input.mixed && true === RegExp(/^the_-?\d+\.?\d*_value$/).test(input.mixed) || ("object" === typeof input.mixed && null !== input.mixed || $report(_exceptionable, {
                path: _path + ".mixed",
                expected: "(\"the_A_value\" | \"the_B_value\" | Resolve<__type> | `the_${number}_value` | boolean | number)",
                value: input.mixed
            })) && $vo1(input.mixed, _path + ".mixed", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".mixed",
                expected: "(\"the_A_value\" | \"the_B_value\" | Resolve<__type> | `the_${number}_value` | boolean | number)",
                value: input.mixed
            })), 4 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).map(key => {
                if (["prefix", "postfix", "middle", "mixed"].some(prop => key === prop))
                    return true;
                const value = input[key];
                if (undefined === value)
                    return true;
                return $report(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value
                });
            }).every((flag: boolean) => flag))].every((flag: boolean) => flag);
        const $vo1 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), 1 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).map(key => {
                if (["name"].some(prop => key === prop))
                    return true;
                const value = input[key];
                if (undefined === value)
                    return true;
                return $report(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value
                });
            }).every((flag: boolean) => flag))].every((flag: boolean) => flag);
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<TemplateUnion.Type>>",
            value: input
        })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<TemplateUnion.Type>",
            value: elem
        })) && $vo0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<TemplateUnion.Type>",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<TemplateUnion.Type>>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<TemplateUnion>;
});
