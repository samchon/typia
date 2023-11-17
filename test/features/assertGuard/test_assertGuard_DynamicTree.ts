import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_assertGuard_DynamicTree = _test_assertGuard(
  "DynamicTree",
)<DynamicTree>(DynamicTree)((input) => typia.assertGuard<DynamicTree>(input));
