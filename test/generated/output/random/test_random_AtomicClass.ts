import typia from "../../../src";
import { AtomicClass } from "../../structures/AtomicClass";
import { _test_random } from "../internal/_test_random";
export const test_random_AtomicClass = _test_random("AtomicClass", () => ((generator: typia.IRandomGenerator = (typia.random as any).generator) => {
    const $generator = (typia.random as any).generator;
    const $pick = (typia.random as any).pick;
    return [
        (generator.boolean ?? $generator.boolean)(),
        $pick([
            () => false,
            () => (generator.boolean ?? $generator.boolean)()
        ])(),
        $pick([
            () => (generator.boolean ?? $generator.boolean)(),
            () => (generator.boolean ?? $generator.boolean)()
        ])(),
        (generator.number ?? $generator.number)(0, 100),
        $pick([
            () => 1,
            () => (generator.number ?? $generator.number)(0, 100)
        ])(),
        $pick([
            () => (generator.number ?? $generator.number)(0, 100),
            () => (generator.number ?? $generator.number)(0, 100)
        ])(),
        (generator.string ?? $generator.string)(),
        $pick([
            () => "characters",
            () => (generator.string ?? $generator.string)()
        ])(),
        $pick([
            () => (generator.string ?? $generator.string)(),
            () => (generator.string ?? $generator.string)()
        ])()
    ];
})(), (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is (string | number | boolean | String | Number | Boolean)[] => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(Boolean | Number | String | boolean | number | string)>",
            value: input
        })) && input.every((elem: any, _index1: number) => (null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Boolean | Number | String | boolean | number | string)",
            value: elem
        })) && (undefined !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Boolean | Number | String | boolean | number | string)",
            value: elem
        })) && ("string" === typeof elem || elem instanceof String || ("number" === typeof elem || elem instanceof Number) || ("boolean" === typeof elem || elem instanceof Boolean) || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Boolean | Number | String | boolean | number | string)",
            value: elem
        })));
    })(input, "$input", true);
    return input as typia.Primitive<AtomicClass>;
});
