import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_misc_validatePrune_ClassMethod = _test_misc_validatePrune(
    "ClassMethod",
)<ClassMethod>(ClassMethod)((input) =>
    typia.misc.validatePrune<ClassMethod>(input),
);
