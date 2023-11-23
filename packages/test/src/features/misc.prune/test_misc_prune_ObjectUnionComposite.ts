import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_misc_prune_ObjectUnionComposite = _test_misc_prune(
  "ObjectUnionComposite",
)<ObjectUnionComposite>(ObjectUnionComposite)((input) =>
  typia.misc.prune<ObjectUnionComposite>(input),
);
