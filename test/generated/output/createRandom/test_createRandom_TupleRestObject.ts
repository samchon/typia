import typia from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_random } from "../internal/_test_random";
export const test_createRandom_TupleRestObject = _test_random("TupleRestObject", (generator: typia.IRandomGenerator = (typia.createRandom as any).generator) => {
    const $generator = (typia.createRandom as any).generator;
    const $ro0 = (recursive = false, depth = 0) => ({
        value: (generator.string ?? $generator.string)()
    });
    return [
        (generator.boolean ?? $generator.boolean)(),
        (generator.number ?? $generator.number)(0, 100),
        $ro0()
    ];
}, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is (number | boolean | IObject)[] => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => "string" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "string",
            value: input.value
        });
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(Resolve<TupleRestObject.IObject> | boolean | number)>",
            value: input
        })) && input.every((elem: any, _index1: number) => (null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<TupleRestObject.IObject> | boolean | number)",
            value: elem
        })) && (undefined !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<TupleRestObject.IObject> | boolean | number)",
            value: elem
        })) && ("number" === typeof elem || "boolean" === typeof elem || ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<TupleRestObject.IObject> | boolean | number)",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true)));
    })(input, "$input", true);
    return input as typia.Primitive<TupleRestObject>;
});
