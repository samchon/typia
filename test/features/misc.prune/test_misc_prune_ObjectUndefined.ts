import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_misc_prune_ObjectUndefined = _test_misc_prune(
  "ObjectUndefined",
)<ObjectUndefined>(ObjectUndefined)((input) =>
  typia.misc.prune<ObjectUndefined>(input),
);
