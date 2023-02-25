import typia from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_random } from "../internal/_test_random";
export const test_random_ObjectAlias = _test_random("ObjectAlias", () => ((generator: typia.IRandomGenerator = (typia.random as any).generator) => {
    const $generator = (typia.random as any).generator;
    const $pick = (typia.random as any).pick;
    const $ro0 = (recursive = false, depth = 0) => ({
        id: (generator.string ?? $generator.string)(),
        email: (generator.string ?? $generator.string)(),
        name: (generator.string ?? $generator.string)(),
        sex: $pick([
            () => 1,
            () => 2,
            () => "male",
            () => "female"
        ])(),
        age: (generator.number ?? $generator.number)(0, 100),
        dead: (generator.boolean ?? $generator.boolean)()
    });
    return (generator.array ?? $generator.array)(() => $ro0());
})(), (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectAlias => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("string" === typeof input.email || $guard(_exceptionable, {
            path: _path + ".email",
            expected: "string",
            value: input.email
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && (1 === input.sex || 2 === input.sex || "male" === input.sex || "female" === input.sex || $guard(_exceptionable, {
            path: _path + ".sex",
            expected: "(\"female\" | \"male\" | 1 | 2)",
            value: input.sex
        })) && ("number" === typeof input.age || $guard(_exceptionable, {
            path: _path + ".age",
            expected: "number",
            value: input.age
        })) && ("boolean" === typeof input.dead || $guard(_exceptionable, {
            path: _path + ".dead",
            expected: "boolean",
            value: input.dead
        }));
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<Resolve<ObjectAlias.IMember>>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<ObjectAlias.IMember>",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as typia.Primitive<ObjectAlias>;
});
