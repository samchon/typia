import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_misc_clone_DynamicTree = _test_misc_clone(
  "DynamicTree",
)<DynamicTree>(DynamicTree)((input) => typia.misc.clone<DynamicTree>(input));
