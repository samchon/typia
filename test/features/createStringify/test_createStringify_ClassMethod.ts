import typia from "../../../src";

import { ClassMethod } from "../../structures/ClassMethod";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_createStringify_ClassMethod = _test_stringify(
    "ClassMethod",
    ClassMethod.generate,
    typia.createStringify<ClassMethod>(),
);
