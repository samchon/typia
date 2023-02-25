import typia from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_random } from "../internal/_test_random";
export const test_createRandom_ObjectTuple = _test_random("ObjectTuple", (generator: typia.IRandomGenerator = (typia.createRandom as any).generator) => {
    const $generator = (typia.createRandom as any).generator;
    const $ro0 = (recursive = false, depth = 0) => ({
        id: (generator.string ?? $generator.string)(),
        code: (generator.string ?? $generator.string)(),
        name: (generator.string ?? $generator.string)()
    });
    const $ro1 = (recursive = false, depth = 0) => ({
        id: (generator.string ?? $generator.string)(),
        mobile: (generator.string ?? $generator.string)(),
        name: (generator.string ?? $generator.string)()
    });
    return [
        $ro0(),
        $ro1()
    ];
}, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ({ id: string; code: string; name: string; } | { id: string; mobile: string; name: string; })[] => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("string" === typeof input.code || $guard(_exceptionable, {
            path: _path + ".code",
            expected: "string",
            value: input.code
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        }));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("string" === typeof input.mobile || $guard(_exceptionable, {
            path: _path + ".mobile",
            expected: "string",
            value: input.mobile
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        }));
        const $au0 = (input: any, _path: string, _exceptionable: boolean) => (() => {
            if (undefined !== input.code)
                return $ao0(input, _path, true && _exceptionable);
            if (undefined !== input.mobile)
                return $ao1(input, _path, true && _exceptionable);
            return $guard(_exceptionable, {
                path: _path,
                expected: "(__type | __type.o1)",
                value: input
            });
        })();
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(Resolve<__type.o1> | Resolve<__type>)>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<__type.o1> | Resolve<__type>)",
            value: elem
        })) && $au0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as typia.Primitive<ObjectTuple>;
});
