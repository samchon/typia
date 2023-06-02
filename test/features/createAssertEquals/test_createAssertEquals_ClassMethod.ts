import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_createAssertEquals_ClassMethod = _test_assertEquals(
    "ClassMethod",
    ClassMethod.generate,
    typia.createAssertEquals<ClassMethod>(),
);
