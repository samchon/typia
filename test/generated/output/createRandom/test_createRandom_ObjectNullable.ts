import typia from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_random } from "../internal/_test_random";
export const test_createRandom_ObjectNullable = _test_random("ObjectNullable", (generator: typia.IRandomGenerator = (typia.createRandom as any).generator) => {
    const $generator = (typia.createRandom as any).generator;
    const $pick = (typia.createRandom as any).pick;
    const $ro0 = (recursive = false, depth = 0) => ({
        name: (generator.string ?? $generator.string)(),
        manufacturer: $ro1(recursive, recursive ? 1 + depth : depth),
        brand: $ro2(recursive, recursive ? 1 + depth : depth),
        similar: $pick([
            () => $ro1(recursive, recursive ? 1 + depth : depth),
            () => $ro2(recursive, recursive ? 1 + depth : depth)
        ])()
    });
    const $ro1 = (recursive = false, depth = 0) => ({
        type: "manufacturer",
        name: (generator.string ?? $generator.string)()
    });
    const $ro2 = (recursive = false, depth = 0) => ({
        type: "brand",
        name: (generator.string ?? $generator.string)()
    });
    return [
        $ro0(),
        $ro0(),
        $ro0()
    ];
}, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is { name: string; manufacturer: { type: "manufacturer"; name: string; }; brand: { type: "brand"; name: string; }; similar: { type: "manufacturer"; name: string; } | { type: "brand"; name: string; }; }[] => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && (("object" === typeof input.manufacturer && null !== input.manufacturer || $guard(_exceptionable, {
            path: _path + ".manufacturer",
            expected: "Resolve<__type.o1>",
            value: input.manufacturer
        })) && $ao1(input.manufacturer, _path + ".manufacturer", true && _exceptionable)) && (("object" === typeof input.brand && null !== input.brand || $guard(_exceptionable, {
            path: _path + ".brand",
            expected: "Resolve<__type.o2>",
            value: input.brand
        })) && $ao2(input.brand, _path + ".brand", true && _exceptionable)) && (("object" === typeof input.similar && null !== input.similar || $guard(_exceptionable, {
            path: _path + ".similar",
            expected: "(Resolve<__type.o1> | Resolve<__type.o2>)",
            value: input.similar
        })) && $au0(input.similar, _path + ".similar", true && _exceptionable));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("manufacturer" === input.type || $guard(_exceptionable, {
            path: _path + ".type",
            expected: "\"manufacturer\"",
            value: input.type
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        }));
        const $ao2 = (input: any, _path: string, _exceptionable: boolean) => ("brand" === input.type || $guard(_exceptionable, {
            path: _path + ".type",
            expected: "\"brand\"",
            value: input.type
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        }));
        const $au0 = (input: any, _path: string, _exceptionable: boolean) => (() => {
            if ("manufacturer" === input.type)
                return $ao1(input, _path, true && _exceptionable);
            if ("brand" === input.type)
                return $ao2(input, _path, true && _exceptionable);
            return $guard(_exceptionable, {
                path: _path,
                expected: "(__type.o1 | __type.o2)",
                value: input
            });
        })();
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<Resolve<__type>>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<__type>",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as typia.Primitive<ObjectNullable>;
});
