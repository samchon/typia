import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_assertGuardEquals_ClassMethod = _test_assertGuardEquals(
    "ClassMethod",
)<ClassMethod>(ClassMethod)((input) =>
    typia.assertGuardEquals<ClassMethod>(input),
);
