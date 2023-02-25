import typia from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_assert } from "../internal/_test_assert";
export const test_assert_SetUnion = _test_assert("SetUnion", SetUnion.generate, (input) => ((input: any) => {
    const $guard = (typia.assert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is SetUnion => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && ("number" === typeof input.age || $guard(_exceptionable, {
            path: _path + ".age",
            expected: "number",
            value: input.age
        }));
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(Set<Array<number>> | Set<Resolve<SetUnion.Person>> | Set<boolean> | Set<number> | Set<string>)>",
            value: input
        })) && input.every((elem: any, _index1: number) => (elem instanceof Set || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Set<Array<number>> | Set<Resolve<SetUnion.Person>> | Set<boolean> | Set<number> | Set<string>)",
            value: elem
        })) && (() => {
            if (0 === elem.size)
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
                    }))], [top => Array.isArray(top) && top.every((elem: any, _index3: number) => "number" === typeof elem), top => top.every((elem: any, _index2: number) => (Array.isArray(elem) || $guard(true, {
                        path: _path + "[" + _index1 + "][" + _index2 + "]",
                        expected: "Array<number>",
                        value: elem
                    })) && elem.every((elem: any, _index4: number) => "number" === typeof elem || $guard(true, {
                        path: _path + "[" + _index1 + "][" + _index2 + "][" + _index4 + "]",
                        expected: "number",
                        value: elem
                    })))], [top => "object" === typeof top && null !== top && $ao0(top, _path + "[0]", false), top => top.every((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $guard(true, {
                        path: _path + "[" + _index1 + "][" + _index2 + "]",
                        expected: "Resolve<SetUnion.Person>",
                        value: elem
                    })) && $ao0(elem, _path + "[" + _index1 + "][" + _index2 + "]", true))]];
            const front = elem.values().next().value;
            const filtered = tupleList.filter(tuple => true === tuple[0](front));
            if (1 === filtered.length)
                return filtered[0][1]([...elem]);
            const array = [...elem];
            if (1 < filtered.length)
                for (const tuple of filtered)
                    if (array.every((value: any) => true === tuple[0](value)))
                        return tuple[1](array);
            return $guard(_exceptionable, {
                path: _path + "[" + _index1 + "]",
                expected: "(Set<boolean> | Set<number> | Set<string> | Set<Array<number>> | Set<Resolve<SetUnion.Person>>)",
                value: elem
            });
        })());
    })(input, "$input", true);
    return input as SetUnion;
})(input), SetUnion.SPOILERS);
