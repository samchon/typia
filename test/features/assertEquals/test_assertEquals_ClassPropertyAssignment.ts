import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_assertEquals_ClassPropertyAssignment = _test_assertEquals(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (input) => typia.assertEquals(input),
);
