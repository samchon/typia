import typia from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_random } from "../internal/_test_random";
export const test_createRandom_AtomicUnion = _test_random("AtomicUnion", (generator: typia.IRandomGenerator = (typia.createRandom as any).generator) => {
    const $generator = (typia.createRandom as any).generator;
    const $pick = (typia.createRandom as any).pick;
    return (generator.array ?? $generator.array)(() => $pick([
        () => (generator.string ?? $generator.string)(),
        () => (generator.number ?? $generator.number)(0, 100),
        () => (generator.boolean ?? $generator.boolean)()
    ])());
}, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is AtomicUnion => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(boolean | number | string)>",
            value: input
        })) && input.every((elem: any, _index1: number) => "string" === typeof elem || "number" === typeof elem || "boolean" === typeof elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(boolean | number | string)",
            value: elem
        }));
    })(input, "$input", true);
    return input as typia.Primitive<AtomicUnion>;
});
