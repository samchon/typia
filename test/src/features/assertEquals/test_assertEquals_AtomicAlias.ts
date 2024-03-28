import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_assertEquals_AtomicAlias = _test_assertEquals(TypeGuardError)(
  "AtomicAlias",
)<AtomicAlias>(AtomicAlias)((input) => typia.assertEquals<AtomicAlias>(input));
