import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_assertGuard_ClassMethod = _test_assertGuard(
    "ClassMethod",
)<ClassMethod>(ClassMethod)((input) => typia.assertGuard<ClassMethod>(input));
