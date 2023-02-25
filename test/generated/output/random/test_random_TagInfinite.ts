import typia from "../../../src";
import { TagInfinite } from "../../structures/TagInfinite";
import { _test_random } from "../internal/_test_random";
export const test_random_TagInfinite = _test_random("TagInfinite", () => ((generator: typia.IRandomGenerator = (typia.random as any).generator) => {
    const $generator = (typia.random as any).generator;
    const $ro0 = (recursive = false, depth = 0) => ({
        value: (generator.number ?? $generator.number)(0, 100),
        ranged: (generator.number ?? $generator.number)(0, 100),
        minimum: (generator.number ?? $generator.number)(0, 10),
        maximum: (generator.number ?? $generator.number)(90, 100),
        multipleOf: 3 * (generator.integer ?? $generator.integer)(0, 10),
        typed: (generator.integer ?? $generator.integer)(0, 100)
    });
    return $ro0();
})(), (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is TagInfinite => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "number",
            value: input.value
        })) && ("number" === typeof input.ranged && 0 <= input.ranged && 100 >= input.ranged || $guard(_exceptionable, {
            path: _path + ".ranged",
            expected: "number",
            value: input.ranged
        })) && ("number" === typeof input.minimum && 0 <= input.minimum || $guard(_exceptionable, {
            path: _path + ".minimum",
            expected: "number",
            value: input.minimum
        })) && ("number" === typeof input.maximum && 100 >= input.maximum || $guard(_exceptionable, {
            path: _path + ".maximum",
            expected: "number",
            value: input.maximum
        })) && ("number" === typeof input.multipleOf && 0 === input.multipleOf % 3 || $guard(_exceptionable, {
            path: _path + ".multipleOf",
            expected: "number",
            value: input.multipleOf
        })) && ("number" === typeof input.typed && parseInt(input.typed) === input.typed || $guard(_exceptionable, {
            path: _path + ".typed",
            expected: "number",
            value: input.typed
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<TagInfinite>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as typia.Primitive<TagInfinite>;
});
