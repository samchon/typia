import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TagInfinite } from "../../../structures/TagInfinite";
export const test_createRandom_TagInfinite = _test_random("TagInfinite", (generator?: Partial<typia.IRandomGenerator>): typia.Primitive<TagInfinite> => {
    const $generator = (typia.createRandom as any).generator;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        value: (generator?.customs ?? $generator.customs)?.number?.([]) ?? (generator?.number ?? $generator.number)(0, 100),
        ranged: (generator?.customs ?? $generator.customs)?.number?.([
            {
                name: "minimum",
                value: "0"
            },
            {
                name: "maximum",
                value: "100"
            }
        ]) ?? (generator?.number ?? $generator.number)(0, 100),
        minimum: (generator?.customs ?? $generator.customs)?.number?.([
            {
                name: "minimum",
                value: "0"
            }
        ]) ?? (generator?.number ?? $generator.number)(0, 10),
        maximum: (generator?.customs ?? $generator.customs)?.number?.([
            {
                name: "maximum",
                value: "100"
            }
        ]) ?? (generator?.number ?? $generator.number)(90, 100),
        multipleOf: (generator?.customs ?? $generator.customs)?.number?.([
            {
                name: "multipleOf",
                value: "3"
            }
        ]) ?? 3 * (generator?.integer ?? $generator.integer)(0, 10),
        typed: (generator?.customs ?? $generator.customs)?.number?.([
            {
                name: "type",
                value: "int"
            }
        ]) ?? (generator?.integer ?? $generator.integer)(0, 100)
    });
    return $ro0();
}, (input: any): typia.Primitive<TagInfinite> => {
    const $guard = (typia.createAssert as any).guard;
    const __is = (input: any): input is typia.Primitive<TagInfinite> => {
        const $io0 = (input: any): boolean => "number" === typeof input.value && Number.isFinite(input.value) && ("number" === typeof input.ranged && 0 <= input.ranged && 100 >= input.ranged) && ("number" === typeof input.minimum && Number.isFinite(input.minimum) && 0 <= input.minimum) && ("number" === typeof input.maximum && Number.isFinite(input.maximum) && 100 >= input.maximum) && ("number" === typeof input.multipleOf && 0 === input.multipleOf % 3) && ("number" === typeof input.typed && Number.isFinite(input.typed) && parseInt(input.typed) === input.typed);
        return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is typia.Primitive<TagInfinite> => {
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("number" === typeof input.value && Number.isFinite(input.value) || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "number",
                value: input.value
            })) && ("number" === typeof input.ranged && (0 <= input.ranged || $guard(_exceptionable, {
                path: _path + ".ranged",
                expected: "number (@minimum 0)",
                value: input.ranged
            })) && (100 >= input.ranged || $guard(_exceptionable, {
                path: _path + ".ranged",
                expected: "number (@maximum 100)",
                value: input.ranged
            })) || $guard(_exceptionable, {
                path: _path + ".ranged",
                expected: "number",
                value: input.ranged
            })) && ("number" === typeof input.minimum && Number.isFinite(input.minimum) && (0 <= input.minimum || $guard(_exceptionable, {
                path: _path + ".minimum",
                expected: "number (@minimum 0)",
                value: input.minimum
            })) || $guard(_exceptionable, {
                path: _path + ".minimum",
                expected: "number",
                value: input.minimum
            })) && ("number" === typeof input.maximum && Number.isFinite(input.maximum) && (100 >= input.maximum || $guard(_exceptionable, {
                path: _path + ".maximum",
                expected: "number (@maximum 100)",
                value: input.maximum
            })) || $guard(_exceptionable, {
                path: _path + ".maximum",
                expected: "number",
                value: input.maximum
            })) && ("number" === typeof input.multipleOf && (0 === input.multipleOf % 3 || $guard(_exceptionable, {
                path: _path + ".multipleOf",
                expected: "number (@multipleOf 3)",
                value: input.multipleOf
            })) || $guard(_exceptionable, {
                path: _path + ".multipleOf",
                expected: "number",
                value: input.multipleOf
            })) && ("number" === typeof input.typed && Number.isFinite(input.typed) && (parseInt(input.typed) === input.typed || $guard(_exceptionable, {
                path: _path + ".typed",
                expected: "number (@type int)",
                value: input.typed
            })) || $guard(_exceptionable, {
                path: _path + ".typed",
                expected: "number",
                value: input.typed
            }));
            return ("object" === typeof input && null !== input || $guard(true, {
                path: _path + "",
                expected: "TagInfinite",
                value: input
            })) && $ao0(input, _path + "", true);
        })(input, "$input", true);
    return input;
});
