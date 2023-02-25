import typia from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_random } from "../internal/_test_random";
export const test_createRandom_ObjectUnionNonPredictable = _test_random("ObjectUnionNonPredictable", (generator: typia.IRandomGenerator = (typia.createRandom as any).generator) => {
    const $pick = (typia.createRandom as any).pick;
    const $generator = (typia.createRandom as any).generator;
    const $ro0 = (recursive = false, depth = 0) => ({
        value: $ro1(recursive, recursive ? 1 + depth : depth)
    });
    const $ro1 = (recursive = false, depth = 0) => ({
        value: $pick([
            () => $ro2(recursive, recursive ? 1 + depth : depth),
            () => $ro4(recursive, recursive ? 1 + depth : depth),
            () => $ro6(recursive, recursive ? 1 + depth : depth)
        ])()
    });
    const $ro2 = (recursive = false, depth = 0) => ({
        value: $ro3(recursive, recursive ? 1 + depth : depth)
    });
    const $ro3 = (recursive = false, depth = 0) => ({
        value: (generator.boolean ?? $generator.boolean)()
    });
    const $ro4 = (recursive = false, depth = 0) => ({
        value: $ro5(recursive, recursive ? 1 + depth : depth)
    });
    const $ro5 = (recursive = false, depth = 0) => ({
        value: (generator.number ?? $generator.number)(0, 100)
    });
    const $ro6 = (recursive = false, depth = 0) => ({
        value: $ro7(recursive, recursive ? 1 + depth : depth)
    });
    const $ro7 = (recursive = false, depth = 0) => ({
        value: (generator.string ?? $generator.string)()
    });
    return (generator.array ?? $generator.array)(() => $ro0());
}, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectUnionNonPredictable => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.value && null !== input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "Resolve<ObjectUnionNonPredictable.IPointer<ObjectUnionNonPredictable.IUnion>>",
            value: input.value
        })) && $ao1(input.value, _path + ".value", true && _exceptionable);
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.value && null !== input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "(Resolve<ObjectUnionNonPredictable.IWrapper<boolean>> | Resolve<ObjectUnionNonPredictable.IWrapper<number>> | Resolve<ObjectUnionNonPredictable.IWrapper<string>>)",
            value: input.value
        })) && $au0(input.value, _path + ".value", true && _exceptionable);
        const $ao2 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.value && null !== input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "Resolve<ObjectUnionNonPredictable.IPointer<boolean>>",
            value: input.value
        })) && $ao3(input.value, _path + ".value", true && _exceptionable);
        const $ao3 = (input: any, _path: string, _exceptionable: boolean) => "boolean" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "boolean",
            value: input.value
        });
        const $ao4 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.value && null !== input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "Resolve<ObjectUnionNonPredictable.IPointer<number>>",
            value: input.value
        })) && $ao5(input.value, _path + ".value", true && _exceptionable);
        const $ao5 = (input: any, _path: string, _exceptionable: boolean) => "number" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "number",
            value: input.value
        });
        const $ao6 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.value && null !== input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "Resolve<ObjectUnionNonPredictable.IPointer<string>>",
            value: input.value
        })) && $ao7(input.value, _path + ".value", true && _exceptionable);
        const $ao7 = (input: any, _path: string, _exceptionable: boolean) => "string" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "string",
            value: input.value
        });
        const $au0 = (input: any, _path: string, _exceptionable: boolean) => $ao2(input, _path, false && _exceptionable) || $ao4(input, _path, false && _exceptionable) || $ao6(input, _path, false && _exceptionable) || $guard(_exceptionable, {
            path: _path,
            expected: "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
            value: input
        });
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<Resolve<ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>>>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>>",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as typia.Primitive<ObjectUnionNonPredictable>;
});
