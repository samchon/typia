import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_misc_assertPrune_ObjectTuple = _test_misc_assertPrune(
  "ObjectTuple",
)<ObjectTuple>(ObjectTuple)((input) =>
  typia.misc.assertPrune<ObjectTuple>(input),
);
