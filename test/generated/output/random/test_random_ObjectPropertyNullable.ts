import typia from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_random } from "../internal/_test_random";
export const test_random_ObjectPropertyNullable = _test_random("ObjectPropertyNullable", () => ((generator: typia.IRandomGenerator = (typia.random as any).generator) => {
    const $generator = (typia.random as any).generator;
    const $pick = (typia.random as any).pick;
    const $ro0 = (recursive = false, depth = 0) => ({
        value: (generator.boolean ?? $generator.boolean)()
    });
    const $ro1 = (recursive = false, depth = 0) => ({
        value: (generator.number ?? $generator.number)(0, 100)
    });
    const $ro2 = (recursive = false, depth = 0) => ({
        value: (generator.string ?? $generator.string)()
    });
    const $ro3 = (recursive = false, depth = 0) => ({
        value: $ro4(recursive, recursive ? 1 + depth : depth)
    });
    const $ro4 = (recursive = false, depth = 0) => ({
        id: (generator.string ?? $generator.string)(),
        name: (generator.string ?? $generator.string)(),
        grade: $pick([
            () => undefined,
            () => (generator.number ?? $generator.number)(0, 100)
        ])(),
        serial: $pick([
            () => undefined,
            () => (generator.number ?? $generator.number)(0, 100)
        ])(),
        activated: (generator.boolean ?? $generator.boolean)()
    });
    return [
        (generator.array ?? $generator.array)(() => $ro0()),
        (generator.array ?? $generator.array)(() => $ro1()),
        (generator.array ?? $generator.array)(() => $ro2()),
        (generator.array ?? $generator.array)(() => $ro3())
    ];
})(), (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ({ value: boolean; }[] | { value: number; }[] | { value: string; }[] | { value: { id: string; name: string; grade?: number; serial?: number; activated: boolean; }; }[])[] => {
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
        const $ao3 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.value && null !== input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "Resolve<__type.o4>",
            value: input.value
        })) && $ao4(input.value, _path + ".value", true && _exceptionable);
        const $ao4 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && (undefined === input.grade || "number" === typeof input.grade || $guard(_exceptionable, {
            path: _path + ".grade",
            expected: "(number | undefined)",
            value: input.grade
        })) && (undefined === input.serial || "number" === typeof input.serial || $guard(_exceptionable, {
            path: _path + ".serial",
            expected: "(number | undefined)",
            value: input.serial
        })) && ("boolean" === typeof input.activated || $guard(_exceptionable, {
            path: _path + ".activated",
            expected: "boolean",
            value: input.activated
        }));
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(Array<Resolve<__type.o1>> | Array<Resolve<__type.o2>> | Array<Resolve<__type.o3>> | Array<Resolve<__type>>)>",
            value: input
        })) && input.every((elem: any, _index1: number) => (Array.isArray(elem) || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Array<Resolve<__type.o1>> | Array<Resolve<__type.o2>> | Array<Resolve<__type.o3>> | Array<Resolve<__type>>)",
            value: elem
        })) && (() => {
            if (0 === elem.length)
                return true;
            const tupleList = [[top => "object" === typeof top && null !== top && $ao0(top, _path + "[0]", false), top => top.every((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $guard(true, {
                        path: _path + "[" + _index1 + "][" + _index2 + "]",
                        expected: "Resolve<__type>",
                        value: elem
                    })) && $ao0(elem, _path + "[" + _index1 + "][" + _index2 + "]", true))], [top => "object" === typeof top && null !== top && $ao1(top, _path + "[0]", false), top => top.every((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $guard(true, {
                        path: _path + "[" + _index1 + "][" + _index2 + "]",
                        expected: "Resolve<__type.o1>",
                        value: elem
                    })) && $ao1(elem, _path + "[" + _index1 + "][" + _index2 + "]", true))], [top => "object" === typeof top && null !== top && $ao2(top, _path + "[0]", false), top => top.every((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $guard(true, {
                        path: _path + "[" + _index1 + "][" + _index2 + "]",
                        expected: "Resolve<__type.o2>",
                        value: elem
                    })) && $ao2(elem, _path + "[" + _index1 + "][" + _index2 + "]", true))], [top => "object" === typeof top && null !== top && $ao3(top, _path + "[0]", false), top => top.every((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $guard(true, {
                        path: _path + "[" + _index1 + "][" + _index2 + "]",
                        expected: "Resolve<__type.o3>",
                        value: elem
                    })) && $ao3(elem, _path + "[" + _index1 + "][" + _index2 + "]", true))]];
            const front = elem[0];
            const filtered = tupleList.filter(tuple => true === tuple[0](front));
            if (1 === filtered.length)
                return filtered[0][1](elem);
            const array = elem;
            if (1 < filtered.length)
                for (const tuple of filtered)
                    if (array.every((value: any) => true === tuple[0](value)))
                        return tuple[1](array);
            return $guard(_exceptionable, {
                path: _path + "[" + _index1 + "]",
                expected: "(Array<Resolve<__type>> | Array<Resolve<__type.o1>> | Array<Resolve<__type.o2>> | Array<Resolve<__type.o3>>)",
                value: elem
            });
        })());
    })(input, "$input", true);
    return input as typia.Primitive<ObjectPropertyNullable>;
});
