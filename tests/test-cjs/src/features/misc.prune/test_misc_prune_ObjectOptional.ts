import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_misc_prune_ObjectOptional = (): void =>
  _test_misc_prune("ObjectOptional")<ObjectOptional>(ObjectOptional)((input) =>
    typia.misc.prune<ObjectOptional>(input),
  );
