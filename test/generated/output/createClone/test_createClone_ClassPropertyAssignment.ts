import typia from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_ClassPropertyAssignment = _test_clone("ClassPropertyAssignment", ClassPropertyAssignment.generate, (input: ClassPropertyAssignment): typia.Primitive<ClassPropertyAssignment> => {
    const $co0 = (input: any) => ({
        id: input.id,
        name: input.name,
        note: input.note,
        editable: input.editable,
        incremental: input.incremental
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
});
