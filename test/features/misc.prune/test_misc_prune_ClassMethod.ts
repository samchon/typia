import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_misc_prune_ClassMethod = _test_misc_prune(
  "ClassMethod",
)<ClassMethod>(ClassMethod)((input) => typia.misc.prune<ClassMethod>(input));
