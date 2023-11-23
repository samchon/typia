import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_misc_createValidateClone_AtomicAlias =
  _test_misc_validateClone("AtomicAlias")<AtomicAlias>(AtomicAlias)(
    typia.misc.createValidateClone<AtomicAlias>(),
  );
