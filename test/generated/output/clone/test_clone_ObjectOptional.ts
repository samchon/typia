import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ObjectOptional } from "../../../structures/ObjectOptional";
export const test_clone_ObjectOptional = _test_clone("ObjectOptional", ObjectOptional.generate, (input) => ((input: ObjectOptional): typia.Primitive<ObjectOptional> => {
    const $co0 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        email: input.email as any,
        sequence: input.sequence as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
})(input));
