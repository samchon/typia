import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_isClone_ClassPropertyAssignment = _test_isClone(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (input) => typia.isClone<ClassPropertyAssignment>(input),
    ClassPropertyAssignment.SPOILERS,
);
