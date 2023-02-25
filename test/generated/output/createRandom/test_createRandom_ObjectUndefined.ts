import typia from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_random } from "../internal/_test_random";
export const test_createRandom_ObjectUndefined = _test_random("ObjectUndefined", (generator: typia.IRandomGenerator = (typia.createRandom as any).generator) => {
    const $generator = (typia.createRandom as any).generator;
    const $pick = (typia.createRandom as any).pick;
    const $ro0 = (recursive = false, depth = 0) => ({
        name: (generator.string ?? $generator.string)(),
        professor: $pick([
            () => undefined,
            () => (generator.string ?? $generator.string)(),
            () => (generator.number ?? $generator.number)(0, 100)
        ])(),
        classroom: $pick([
            () => undefined,
            () => $ro1(recursive, recursive ? 1 + depth : depth)
        ])(),
        grade: (generator.number ?? $generator.number)(0, 100),
        nothing: undefined,
        unknown: "fucking any type exists...",
        never: undefined
    });
    const $ro1 = (recursive = false, depth = 0) => ({
        id: (generator.string ?? $generator.string)(),
        name: (generator.string ?? $generator.string)()
    });
    return (generator.array ?? $generator.array)(() => $ro0());
}, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is { name: string; professor?: string | number; classroom?: { id: string; name: string; }; grade: number; nothing: never; unknown: unknown; never: never; }[] => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && (undefined === input.professor || "string" === typeof input.professor || "number" === typeof input.professor || $guard(_exceptionable, {
            path: _path + ".professor",
            expected: "(number | string | undefined)",
            value: input.professor
        })) && (undefined === input.classroom || ("object" === typeof input.classroom && null !== input.classroom || $guard(_exceptionable, {
            path: _path + ".classroom",
            expected: "(Resolve<__type.o1> | undefined)",
            value: input.classroom
        })) && $ao1(input.classroom, _path + ".classroom", true && _exceptionable)) && ("number" === typeof input.grade || $guard(_exceptionable, {
            path: _path + ".grade",
            expected: "number",
            value: input.grade
        })) && ((null !== input.nothing || $guard(_exceptionable, {
            path: _path + ".nothing",
            expected: "undefined",
            value: input.nothing
        })) && (undefined === input.nothing || $guard(_exceptionable, {
            path: _path + ".nothing",
            expected: "undefined",
            value: input.nothing
        }))) && true && ((null !== input.never || $guard(_exceptionable, {
            path: _path + ".never",
            expected: "undefined",
            value: input.never
        })) && (undefined === input.never || $guard(_exceptionable, {
            path: _path + ".never",
            expected: "undefined",
            value: input.never
        })));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        }));
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
    return input as typia.Primitive<ObjectUndefined>;
});
