import typia from "../../../src";

import { ClassMethod } from "../../structures/ClassMethod";
import { _test_assertEquals } from "../../internal/_test_assertEquals";

export const test_createAssertEquals_ClassMethod = _test_assertEquals(
    "ClassMethod",
    ClassMethod.generate,
    typia.createAssertEquals<ClassMethod>(),
);
