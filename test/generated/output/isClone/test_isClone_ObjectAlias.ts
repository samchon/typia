import typia from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_ObjectAlias = _test_isClone("ObjectAlias", ObjectAlias.generate, (input) => ((input: any): typia.Primitive<ObjectAlias> | null => { const is = (input: any): input is ObjectAlias => {
    const $io0 = (input: any) => "string" === typeof input.id && "string" === typeof input.email && "string" === typeof input.name && (1 === input.sex || 2 === input.sex || "male" === input.sex || "female" === input.sex) && "number" === typeof input.age && "boolean" === typeof input.dead;
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; const clone = (input: ObjectAlias): typia.Primitive<ObjectAlias> => {
    const $co0 = (input: any) => ({
        id: input.id,
        email: input.email,
        name: input.name,
        sex: input.sex,
        age: input.age,
        dead: input.dead
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), ObjectAlias.SPOILERS);
