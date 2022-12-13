import typia from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ClassPropertyAssignment = _test_validate(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    typia.createValidate<ClassPropertyAssignment>(),
    ClassPropertyAssignment.SPOILERS,
);