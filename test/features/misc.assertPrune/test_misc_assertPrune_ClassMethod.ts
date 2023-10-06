import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_misc_assertPrune_ClassMethod = _test_misc_assertPrune(
    "ClassMethod",
)<ClassMethod>(ClassMethod)((input) =>
    typia.misc.assertPrune<ClassMethod>(input),
);
