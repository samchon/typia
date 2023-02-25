import typia from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_random } from "../internal/_test_random";
export const test_createRandom_ArrayAtomicAlias = _test_random("ArrayAtomicAlias", (generator: typia.IRandomGenerator = (typia.createRandom as any).generator) => {
    const $generator = (typia.createRandom as any).generator;
    return [
        (generator.array ?? $generator.array)(() => (generator.boolean ?? $generator.boolean)()),
        (generator.array ?? $generator.array)(() => (generator.number ?? $generator.number)(0, 100)),
        (generator.array ?? $generator.array)(() => (generator.string ?? $generator.string)())
    ];
}, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is (boolean[] | number[] | string[])[] => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(Array<boolean> | Array<number> | Array<string>)>",
            value: input
        })) && input.every((elem: any, _index1: number) => (Array.isArray(elem) || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Array<boolean> | Array<number> | Array<string>)",
            value: elem
        })) && (() => {
            if (0 === elem.length)
                return true;
            const tupleList = [[top => "boolean" === typeof top, top => top.every((elem: any, _index2: number) => "boolean" === typeof elem || $guard(true, {
                        path: _path + "[" + _index1 + "][" + _index2 + "]",
                        expected: "boolean",
                        value: elem
                    }))], [top => "number" === typeof top, top => top.every((elem: any, _index2: number) => "number" === typeof elem || $guard(true, {
                        path: _path + "[" + _index1 + "][" + _index2 + "]",
                        expected: "number",
                        value: elem
                    }))], [top => "string" === typeof top, top => top.every((elem: any, _index2: number) => "string" === typeof elem || $guard(true, {
                        path: _path + "[" + _index1 + "][" + _index2 + "]",
                        expected: "string",
                        value: elem
                    }))]];
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
                expected: "(Array<boolean> | Array<number> | Array<string>)",
                value: elem
            });
        })());
    })(input, "$input", true);
    return input as typia.Primitive<ArrayAtomicAlias>;
});
