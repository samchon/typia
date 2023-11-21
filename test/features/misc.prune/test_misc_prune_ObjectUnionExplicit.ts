import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_misc_prune_ObjectUnionExplicit = _test_misc_prune(
  "ObjectUnionExplicit",
)<ObjectUnionExplicit>(ObjectUnionExplicit)((input) =>
  typia.misc.prune<ObjectUnionExplicit>(input),
);
