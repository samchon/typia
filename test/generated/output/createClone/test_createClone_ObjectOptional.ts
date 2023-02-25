import typia from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_ObjectOptional = _test_clone("ObjectOptional", ObjectOptional.generate, (input: ObjectOptional): typia.Primitive<ObjectOptional> => {
    const $co0 = (input: any) => ({
        id: input.id,
        name: input.name,
        email: input.email,
        sequence: input.sequence
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
});
