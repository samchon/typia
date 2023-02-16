import typia from "typia";

import { ClassMethod } from "../../structures/ClassMethod";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ClassMethod = _test_validateEquals(
    "ClassMethod",
    ClassMethod.generate,
    typia.createValidateEquals<ClassMethod>(),
);
