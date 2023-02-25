import typia from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ClassPropertyAssignment = _test_is(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    typia.createIs<ClassPropertyAssignment>(),
    ClassPropertyAssignment.SPOILERS,
);
