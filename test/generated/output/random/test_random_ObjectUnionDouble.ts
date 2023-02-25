import typia from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_random } from "../internal/_test_random";
export const test_random_ObjectUnionDouble = _test_random("ObjectUnionDouble", () => ((generator: typia.IRandomGenerator = (typia.random as any).generator) => {
    const $pick = (typia.random as any).pick;
    const $generator = (typia.random as any).generator;
    const $ro0 = (recursive = false, depth = 0) => ({
        value: $ro1(recursive, recursive ? 1 + depth : depth),
        child: $pick([
            () => $ro2(recursive, recursive ? 1 + depth : depth),
            () => $ro4(recursive, recursive ? 1 + depth : depth)
        ])()
    });
    const $ro1 = (recursive = false, depth = 0) => ({
        x: (generator.number ?? $generator.number)(0, 100)
    });
    const $ro2 = (recursive = false, depth = 0) => ({
        value: $ro3(recursive, recursive ? 1 + depth : depth)
    });
    const $ro3 = (recursive = false, depth = 0) => ({
        y: (generator.boolean ?? $generator.boolean)()
    });
    const $ro4 = (recursive = false, depth = 0) => ({
        value: $ro5(recursive, recursive ? 1 + depth : depth)
    });
    const $ro5 = (recursive = false, depth = 0) => ({
        y: (generator.number ?? $generator.number)(0, 100)
    });
    const $ro6 = (recursive = false, depth = 0) => ({
        value: $ro7(recursive, recursive ? 1 + depth : depth),
        child: $pick([
            () => $ro8(recursive, recursive ? 1 + depth : depth),
            () => $ro10(recursive, recursive ? 1 + depth : depth)
        ])()
    });
    const $ro7 = (recursive = false, depth = 0) => ({
        x: (generator.string ?? $generator.string)()
    });
    const $ro8 = (recursive = false, depth = 0) => ({
        value: $ro9(recursive, recursive ? 1 + depth : depth)
    });
    const $ro9 = (recursive = false, depth = 0) => ({
        y: (generator.string ?? $generator.string)()
    });
    const $ro10 = (recursive = false, depth = 0) => ({
        value: $ro11(recursive, recursive ? 1 + depth : depth)
    });
    const $ro11 = (recursive = false, depth = 0) => ({
        y: (generator.array ?? $generator.array)(() => (generator.number ?? $generator.number)(0, 100))
    });
    return (generator.array ?? $generator.array)(() => $pick([
        () => $ro0(),
        () => $ro6()
    ])());
})(), (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectUnionDouble => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.value && null !== input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "Resolve<__type>",
            value: input.value
        })) && $ao1(input.value, _path + ".value", true && _exceptionable) && (("object" === typeof input.child && null !== input.child || $guard(_exceptionable, {
            path: _path + ".child",
            expected: "(Resolve<ObjectUnionDouble.IAA> | Resolve<ObjectUnionDouble.IAB>)",
            value: input.child
        })) && $au0(input.child, _path + ".child", true && _exceptionable));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => "number" === typeof input.x || $guard(_exceptionable, {
            path: _path + ".x",
            expected: "number",
            value: input.x
        });
        const $ao2 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.value && null !== input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "Resolve<__type.o1>",
            value: input.value
        })) && $ao3(input.value, _path + ".value", true && _exceptionable);
        const $ao3 = (input: any, _path: string, _exceptionable: boolean) => "boolean" === typeof input.y || $guard(_exceptionable, {
            path: _path + ".y",
            expected: "boolean",
            value: input.y
        });
        const $ao4 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.value && null !== input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "Resolve<__type.o2>",
            value: input.value
        })) && $ao5(input.value, _path + ".value", true && _exceptionable);
        const $ao5 = (input: any, _path: string, _exceptionable: boolean) => "number" === typeof input.y || $guard(_exceptionable, {
            path: _path + ".y",
            expected: "number",
            value: input.y
        });
        const $ao6 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.value && null !== input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "Resolve<__type.o3>",
            value: input.value
        })) && $ao7(input.value, _path + ".value", true && _exceptionable) && (("object" === typeof input.child && null !== input.child || $guard(_exceptionable, {
            path: _path + ".child",
            expected: "(Resolve<ObjectUnionDouble.IBA> | Resolve<ObjectUnionDouble.IBB>)",
            value: input.child
        })) && $au1(input.child, _path + ".child", true && _exceptionable));
        const $ao7 = (input: any, _path: string, _exceptionable: boolean) => "string" === typeof input.x || $guard(_exceptionable, {
            path: _path + ".x",
            expected: "string",
            value: input.x
        });
        const $ao8 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.value && null !== input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "Resolve<__type.o4>",
            value: input.value
        })) && $ao9(input.value, _path + ".value", true && _exceptionable);
        const $ao9 = (input: any, _path: string, _exceptionable: boolean) => "string" === typeof input.y || $guard(_exceptionable, {
            path: _path + ".y",
            expected: "string",
            value: input.y
        });
        const $ao10 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.value && null !== input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "Resolve<__type.o5>",
            value: input.value
        })) && $ao11(input.value, _path + ".value", true && _exceptionable);
        const $ao11 = (input: any, _path: string, _exceptionable: boolean) => (Array.isArray(input.y) || $guard(_exceptionable, {
            path: _path + ".y",
            expected: "Array<number>",
            value: input.y
        })) && input.y.every((elem: any, _index2: number) => "number" === typeof elem || $guard(_exceptionable, {
            path: _path + ".y[" + _index2 + "]",
            expected: "number",
            value: elem
        }));
        const $au0 = (input: any, _path: string, _exceptionable: boolean) => $ao2(input, _path, false && _exceptionable) || $ao4(input, _path, false && _exceptionable) || $guard(_exceptionable, {
            path: _path,
            expected: "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
            value: input
        });
        const $au1 = (input: any, _path: string, _exceptionable: boolean) => $ao8(input, _path, false && _exceptionable) || $ao10(input, _path, false && _exceptionable) || $guard(_exceptionable, {
            path: _path,
            expected: "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
            value: input
        });
        const $au2 = (input: any, _path: string, _exceptionable: boolean) => $ao0(input, _path, false && _exceptionable) || $ao6(input, _path, false && _exceptionable) || $guard(_exceptionable, {
            path: _path,
            expected: "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
            value: input
        });
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(Resolve<ObjectUnionDouble.IA> | Resolve<ObjectUnionDouble.IB>)>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<ObjectUnionDouble.IA> | Resolve<ObjectUnionDouble.IB>)",
            value: elem
        })) && $au2(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as typia.Primitive<ObjectUnionDouble>;
});
