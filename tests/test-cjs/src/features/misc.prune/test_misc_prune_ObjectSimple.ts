import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_misc_prune_ObjectSimple = (): void =>
  _test_misc_prune("ObjectSimple")<ObjectSimple>(ObjectSimple)((input) =>
    typia.misc.prune<ObjectSimple>(input),
  );
