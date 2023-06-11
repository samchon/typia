import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_stringify_ClassPropertyAssignment = _test_stringify(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (input) => typia.stringify(input),
);
