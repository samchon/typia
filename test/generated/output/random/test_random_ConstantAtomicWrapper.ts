import typia from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_random } from "../internal/_test_random";
export const test_random_ConstantAtomicWrapper = _test_random("ConstantAtomicWrapper", () => ((generator: typia.IRandomGenerator = (typia.random as any).generator) => {
    const $generator = (typia.random as any).generator;
    const $ro0 = (recursive = false, depth = 0) => ({
        value: (generator.boolean ?? $generator.boolean)()
    });
    const $ro1 = (recursive = false, depth = 0) => ({
        value: (generator.number ?? $generator.number)(0, 100)
    });
    const $ro2 = (recursive = false, depth = 0) => ({
        value: (generator.string ?? $generator.string)()
    });
    return [
        $ro0(),
        $ro1(),
        $ro2()
    ];
})(), (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ({ value: boolean; } | { value: number; } | { value: string; })[] => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => "boolean" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "boolean",
            value: input.value
        });
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => "number" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "number",
            value: input.value
        });
        const $ao2 = (input: any, _path: string, _exceptionable: boolean) => "string" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "string",
            value: input.value
        });
        const $au0 = (input: any, _path: string, _exceptionable: boolean) => (() => {
            if ("boolean" === typeof input.value)
                return $ao0(input, _path, true && _exceptionable);
            if ("number" === typeof input.value)
                return $ao1(input, _path, true && _exceptionable);
            if ("string" === typeof input.value)
                return $ao2(input, _path, true && _exceptionable);
            return $guard(_exceptionable, {
                path: _path,
                expected: "(__type | __type.o1 | __type.o2)",
                value: input
            });
        })();
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(Resolve<__type.o1> | Resolve<__type.o2> | Resolve<__type>)>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<__type.o1> | Resolve<__type.o2> | Resolve<__type>)",
            value: elem
        })) && $au0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as typia.Primitive<ConstantAtomicWrapper>;
});
