import typia from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_random } from "../internal/_test_random";
export const test_random_TagTuple = _test_random("TagTuple", () => ((generator: typia.IRandomGenerator = (typia.random as any).generator) => {
    const $generator = (typia.random as any).generator;
    const $ro0 = (recursive = false, depth = 0) => ({
        tuple: [
            (generator.string ?? $generator.string)((generator.integer ?? $generator.integer)(3, 7)),
            (generator.number ?? $generator.number)(3, 7),
            (generator.array ?? $generator.array)(() => (generator.string ?? $generator.string)((generator.integer ?? $generator.integer)(3, 7)), (generator.integer ?? $generator.integer)(3, 7)),
            (generator.array ?? $generator.array)(() => (generator.number ?? $generator.number)(3, 7), (generator.integer ?? $generator.integer)(3, 7))
        ]
    });
    return $ro0();
})(), (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is { tuple: (string | number | string[] | number[])[]; } => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => (Array.isArray(input.tuple) && (3 <= input.tuple.length && 7 >= input.tuple.length) || $guard(_exceptionable, {
            path: _path + ".tuple",
            expected: "Array<(Array<number> | Array<string> | number | string)>",
            value: input.tuple
        })) && input.tuple.every((elem: any, _index1: number) => (null !== elem || $guard(_exceptionable, {
            path: _path + ".tuple[" + _index1 + "]",
            expected: "(Array<number> | Array<string> | number | string)",
            value: elem
        })) && (undefined !== elem || $guard(_exceptionable, {
            path: _path + ".tuple[" + _index1 + "]",
            expected: "(Array<number> | Array<string> | number | string)",
            value: elem
        })) && ("string" === typeof elem && 3 <= elem.length && 7 >= elem.length || "number" === typeof elem && 3 <= elem && 7 >= elem || (Array.isArray(elem) && (3 <= elem.length && 7 >= elem.length) || $guard(_exceptionable, {
            path: _path + ".tuple[" + _index1 + "]",
            expected: "(Array<number> | Array<string> | number | string)",
            value: elem
        })) && (() => {
            if (0 === elem.length)
                return true;
            const tupleList = [[top => "string" === typeof top && 3 <= top.length && 7 >= top.length, top => top.every((elem: any, _index2: number) => "string" === typeof elem && 3 <= elem.length && 7 >= elem.length || $guard(_exceptionable, {
                        path: _path + ".tuple[" + _index1 + "][" + _index2 + "]",
                        expected: "string",
                        value: elem
                    }))], [top => "number" === typeof top && 3 <= top && 7 >= top, top => top.every((elem: any, _index2: number) => "number" === typeof elem && 3 <= elem && 7 >= elem || $guard(_exceptionable, {
                        path: _path + ".tuple[" + _index1 + "][" + _index2 + "]",
                        expected: "number",
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
                path: _path + ".tuple[" + _index1 + "]",
                expected: "(Array<string> | Array<number>)",
                value: elem
            });
        })()));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<__type>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as typia.Primitive<TagTuple>;
});
