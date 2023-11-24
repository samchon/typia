import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_misc_prune_ObjectHttpAtomic = _test_misc_prune(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)((input) =>
  typia.misc.prune<ObjectHttpAtomic>(input),
);
