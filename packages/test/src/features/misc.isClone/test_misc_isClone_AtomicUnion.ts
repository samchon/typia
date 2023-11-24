import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_misc_isClone_AtomicUnion = _test_misc_isClone(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)((input) => typia.misc.isClone<AtomicUnion>(input));
