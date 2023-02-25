import typia from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_random } from "../internal/_test_random";
export const test_createRandom_DynamicTree = _test_random("DynamicTree", (generator: typia.IRandomGenerator = (typia.createRandom as any).generator) => {
    const $generator = (typia.createRandom as any).generator;
    const $ro0 = (recursive = false, depth = 0) => ({
        id: (generator.string ?? $generator.string)(),
        sequence: (generator.number ?? $generator.number)(0, 100),
        children: $ro1(recursive, recursive ? 1 + depth : depth)
    });
    const $ro1 = (recursive = true, depth = 0) => {
        const output = {};
        if (5 >= depth) {
            (generator.array ?? $generator.array)(() => output[(generator.string ?? $generator.string)()] = $ro0(true, recursive ? 1 + depth : depth), (generator.integer ?? $generator.integer)(0, 3));
        }
        return output;
    };
    return $ro0();
}, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    const $join = (typia.createAssert as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicTree => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("number" === typeof input.sequence || $guard(_exceptionable, {
            path: _path + ".sequence",
            expected: "number",
            value: input.sequence
        })) && (("object" === typeof input.children && null !== input.children && false === Array.isArray(input.children) || $guard(_exceptionable, {
            path: _path + ".children",
            expected: "Resolve<Record<string, DynamicTree>>",
            value: input.children
        })) && $ao1(input.children, _path + ".children", true && _exceptionable));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => false === _exceptionable || Object.keys(input).every(key => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/(.*)/).test(key))
                return ("object" === typeof value && null !== value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "Resolve<DynamicTree>",
                    value: value
                })) && $ao0(value, _path + $join(key), true && _exceptionable);
            return true;
        });
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<DynamicTree>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as typia.Primitive<DynamicTree>;
});
