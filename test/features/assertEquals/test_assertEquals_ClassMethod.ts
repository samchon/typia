import typia from "../../../src";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_assertEquals_ClassMethod = _test_assertEquals(
    "ClassMethod",
)<ClassMethod>(
    ClassMethod
)((input) => typia.assertEquals<ClassMethod>(input));
