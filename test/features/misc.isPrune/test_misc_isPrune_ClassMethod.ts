import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_misc_isPrune_ClassMethod = _test_misc_isPrune(
  "ClassMethod",
)<ClassMethod>(ClassMethod)((input) => typia.misc.isPrune<ClassMethod>(input));
