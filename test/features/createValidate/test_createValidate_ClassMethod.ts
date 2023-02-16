import typia from "typia";

import { ClassMethod } from "../../structures/ClassMethod";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ClassMethod = _test_validate(
    "ClassMethod",
    ClassMethod.generate,
    typia.createValidate<ClassMethod>(),
    ClassMethod.SPOILERS,
);
