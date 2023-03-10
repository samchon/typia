import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_createIsClone_ClassPropertyAssignment = _test_isClone(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    typia.createIsClone<ClassPropertyAssignment>(),
    ClassPropertyAssignment.SPOILERS,
);
