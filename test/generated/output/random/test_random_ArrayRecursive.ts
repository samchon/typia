import typia from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_random } from "../internal/_test_random";
export const test_random_ArrayRecursive = _test_random("ArrayRecursive", () => ((generator: typia.IRandomGenerator = (typia.random as any).generator) => {
    const $generator = (typia.random as any).generator;
    const $ro0 = (recursive = true, depth = 0) => ({
        children: recursive && 5 < depth ? [] : (generator.array ?? $generator.array)(() => $ro0(true, recursive ? 1 + depth : depth)),
        id: (generator.number ?? $generator.number)(0, 100),
        code: (generator.string ?? $generator.string)(),
        sequence: (generator.number ?? $generator.number)(0, 100),
        created_at: $ro1(true, recursive ? 1 + depth : depth)
    });
    const $ro1 = (recursive = false, depth = 0) => ({
        time: (generator.number ?? $generator.number)(0, 100),
        zone: (generator.number ?? $generator.number)(0, 100)
    });
    return $ro0();
})(), (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ICategory => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => (Array.isArray(input.children) || $guard(_exceptionable, {
            path: _path + ".children",
            expected: "Array<Resolve<ArrayRecursive.ICategory>>",
            value: input.children
        })) && input.children.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".children[" + _index1 + "]",
            expected: "Resolve<ArrayRecursive.ICategory>",
            value: elem
        })) && $ao0(elem, _path + ".children[" + _index1 + "]", true && _exceptionable)) && ("number" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "number",
            value: input.id
        })) && ("string" === typeof input.code || $guard(_exceptionable, {
            path: _path + ".code",
            expected: "string",
            value: input.code
        })) && ("number" === typeof input.sequence || $guard(_exceptionable, {
            path: _path + ".sequence",
            expected: "number",
            value: input.sequence
        })) && (("object" === typeof input.created_at && null !== input.created_at || $guard(_exceptionable, {
            path: _path + ".created_at",
            expected: "Resolve<ArrayRecursive.ITimestamp>",
            value: input.created_at
        })) && $ao1(input.created_at, _path + ".created_at", true && _exceptionable));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.time || $guard(_exceptionable, {
            path: _path + ".time",
            expected: "number",
            value: input.time
        })) && ("number" === typeof input.zone || $guard(_exceptionable, {
            path: _path + ".zone",
            expected: "number",
            value: input.zone
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<ArrayRecursive.ICategory>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as typia.Primitive<ArrayRecursive>;
});
