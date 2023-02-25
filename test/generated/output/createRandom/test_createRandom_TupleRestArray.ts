import typia from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_random } from "../internal/_test_random";
export const test_createRandom_TupleRestArray = _test_random("TupleRestArray", (generator: typia.IRandomGenerator = (typia.createRandom as any).generator) => {
    const $generator = (typia.createRandom as any).generator;
    return [
        (generator.boolean ?? $generator.boolean)(),
        (generator.number ?? $generator.number)(0, 100),
        (generator.array ?? $generator.array)(() => (generator.string ?? $generator.string)())
    ];
}, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is (number | boolean | string[])[] => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(Array<string> | boolean | number)>",
            value: input
        })) && input.every((elem: any, _index1: number) => (null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Array<string> | boolean | number)",
            value: elem
        })) && (undefined !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Array<string> | boolean | number)",
            value: elem
        })) && ("number" === typeof elem || "boolean" === typeof elem || (Array.isArray(elem) || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Array<string> | boolean | number)",
            value: elem
        })) && elem.every((elem: any, _index2: number) => "string" === typeof elem || $guard(true, {
            path: _path + "[" + _index1 + "][" + _index2 + "]",
            expected: "string",
            value: elem
        }))));
    })(input, "$input", true);
    return input as typia.Primitive<TupleRestArray>;
});
