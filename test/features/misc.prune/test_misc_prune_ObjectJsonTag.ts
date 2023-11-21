import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_misc_prune_ObjectJsonTag = _test_misc_prune(
  "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)((input) =>
  typia.misc.prune<ObjectJsonTag>(input),
);
