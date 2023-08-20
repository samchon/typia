import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_clone_ClassPropertyAssignment = _test_clone(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (input) => typia.clone<ClassPropertyAssignment>(input),
);
