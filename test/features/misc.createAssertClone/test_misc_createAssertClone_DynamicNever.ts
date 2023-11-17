import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_misc_createAssertClone_DynamicNever = _test_misc_assertClone(
  "DynamicNever",
)<DynamicNever>(DynamicNever)(typia.misc.createAssertClone<DynamicNever>());
