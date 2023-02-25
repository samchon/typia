import typia from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_ObjectAlias = _test_clone("ObjectAlias", ObjectAlias.generate, (input) => ((input: ObjectAlias): typia.Primitive<ObjectAlias> => {
    const $co0 = (input: any) => ({
        id: input.id,
        email: input.email,
        name: input.name,
        sex: input.sex,
        age: input.age,
        dead: input.dead
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
})(input));
