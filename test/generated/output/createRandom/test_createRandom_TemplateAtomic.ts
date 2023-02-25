import typia from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_random } from "../internal/_test_random";
export const test_createRandom_TemplateAtomic = _test_random("TemplateAtomic", (generator: typia.IRandomGenerator = (typia.createRandom as any).generator) => {
    const $generator = (typia.createRandom as any).generator;
    const $pick = (typia.createRandom as any).pick;
    const $ro0 = (recursive = false, depth = 0) => ({
        prefix: `prefix_${(generator.string ?? $generator.string)()}`,
        postfix: `${(generator.string ?? $generator.string)()}_postfix`,
        middle_string: `the_${(generator.string ?? $generator.string)()}_value`,
        middle_string_empty: `the_${(generator.string ?? $generator.string)()}_value`,
        middle_numeric: `the_${(generator.number ?? $generator.number)(0, 100)}_value`,
        middle_boolean: $pick([
            () => "the_false_value",
            () => "the_true_value"
        ])(),
        ipv4: `${(generator.number ?? $generator.number)(0, 100)}.${(generator.number ?? $generator.number)(0, 100)}.${(generator.number ?? $generator.number)(0, 100)}.${(generator.number ?? $generator.number)(0, 100)}`,
        email: `${(generator.string ?? $generator.string)()}@${(generator.string ?? $generator.string)()}.${(generator.string ?? $generator.string)()}`
    });
    return $ro0();
}, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is TemplateAtomic => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.prefix && true === RegExp(/^prefix_(.*)/).test(input.prefix) || $guard(_exceptionable, {
            path: _path + ".prefix",
            expected: "`prefix_${string}`",
            value: input.prefix
        })) && ("string" === typeof input.postfix && true === RegExp(/(.*)_postfix$/).test(input.postfix) || $guard(_exceptionable, {
            path: _path + ".postfix",
            expected: "`${string}_postfix`",
            value: input.postfix
        })) && ("string" === typeof input.middle_string && true === RegExp(/^the_(.*)_value$/).test(input.middle_string) || $guard(_exceptionable, {
            path: _path + ".middle_string",
            expected: "`the_${string}_value`",
            value: input.middle_string
        })) && ("string" === typeof input.middle_string_empty && true === RegExp(/^the_(.*)_value$/).test(input.middle_string_empty) || $guard(_exceptionable, {
            path: _path + ".middle_string_empty",
            expected: "`the_${string}_value`",
            value: input.middle_string_empty
        })) && ("string" === typeof input.middle_numeric && true === RegExp(/^the_-?\d+\.?\d*_value$/).test(input.middle_numeric) || $guard(_exceptionable, {
            path: _path + ".middle_numeric",
            expected: "`the_${number}_value`",
            value: input.middle_numeric
        })) && ("the_false_value" === input.middle_boolean || "the_true_value" === input.middle_boolean || $guard(_exceptionable, {
            path: _path + ".middle_boolean",
            expected: "(\"the_false_value\" | \"the_true_value\")",
            value: input.middle_boolean
        })) && ("string" === typeof input.ipv4 && true === RegExp(/^-?\d+\.?\d*\.-?\d+\.?\d*\.-?\d+\.?\d*\.-?\d+\.?\d*$/).test(input.ipv4) || $guard(_exceptionable, {
            path: _path + ".ipv4",
            expected: "`${number}.${number}.${number}.${number}`",
            value: input.ipv4
        })) && ("string" === typeof input.email && true === RegExp(/(.*)@(.*)\.(.*)/).test(input.email) || $guard(_exceptionable, {
            path: _path + ".email",
            expected: "`${string}@${string}.${string}`",
            value: input.email
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<TemplateAtomic>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as typia.Primitive<TemplateAtomic>;
});
