import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_misc_createPrune_AtomicAlias = _test_misc_prune(
  "AtomicAlias",
)<AtomicAlias>(AtomicAlias)((input: AtomicAlias): void => {});
