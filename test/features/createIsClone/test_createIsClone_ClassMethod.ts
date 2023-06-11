import typia from "../../../src";

import { ClassMethod } from "../../structures/ClassMethod";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_createIsClone_ClassMethod = _test_isClone(
    "ClassMethod",
    ClassMethod.generate,
    typia.createIsClone<ClassMethod>(),
    ClassMethod.SPOILERS,
);
