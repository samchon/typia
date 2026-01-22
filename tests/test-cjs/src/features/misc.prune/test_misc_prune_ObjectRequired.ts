import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_misc_prune_ObjectRequired = (): void =>
  _test_misc_prune("ObjectRequired")<ObjectRequired>(ObjectRequired)((input) =>
    typia.misc.prune<ObjectRequired>(input),
  );
