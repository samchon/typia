import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_createIsStringify_ClassPropertyAssignment = _test_isStringify(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    typia.createIsStringify<ClassPropertyAssignment>(),
    ClassPropertyAssignment.SPOILERS,
);
