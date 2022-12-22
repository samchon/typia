import typia from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ClassPropertyAssignment =
    _test_assertEquals(
        "ClassPropertyAssignment",
        ClassPropertyAssignment.generate,
        typia.createAssertEquals<ClassPropertyAssignment>(),
    );
