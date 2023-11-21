import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_misc_assertPrune_ObjectPartial = _test_misc_assertPrune(
  "ObjectPartial",
)<ObjectPartial>(ObjectPartial)((input) =>
  typia.misc.assertPrune<ObjectPartial>(input),
);
