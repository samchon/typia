import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_createStringify_ClassPropertyAssignment = _test_stringify(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    typia.createStringify<ClassPropertyAssignment>(),
);
