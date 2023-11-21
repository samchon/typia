import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_misc_clone_ClassMethod = _test_misc_clone(
  "ClassMethod",
)<ClassMethod>(ClassMethod)((input) => typia.misc.clone<ClassMethod>(input));
