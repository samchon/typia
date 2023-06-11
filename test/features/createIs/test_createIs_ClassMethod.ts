import typia from "../../../src";

import { ClassMethod } from "../../structures/ClassMethod";
import { _test_is } from "../../internal/_test_is";

export const test_createIs_ClassMethod = _test_is(
    "ClassMethod",
    ClassMethod.generate,
    typia.createIs<ClassMethod>(),
    ClassMethod.SPOILERS,
);
