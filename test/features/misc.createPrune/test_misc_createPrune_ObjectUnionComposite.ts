import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_misc_createPrune_ObjectUnionComposite = _test_misc_prune(
  "ObjectUnionComposite",
)<ObjectUnionComposite>(ObjectUnionComposite)(
  typia.misc.createPrune<ObjectUnionComposite>(),
);
