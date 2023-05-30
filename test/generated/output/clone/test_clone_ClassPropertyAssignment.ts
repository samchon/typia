import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
export const test_clone_ClassPropertyAssignment = _test_clone("ClassPropertyAssignment", ClassPropertyAssignment.generate, (input) => ((input: ClassPropertyAssignment): typia.Primitive<ClassPropertyAssignment> => {
    const $co0 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        note: input.note as any,
        editable: input.editable as any,
        incremental: input.incremental as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
})(input));
