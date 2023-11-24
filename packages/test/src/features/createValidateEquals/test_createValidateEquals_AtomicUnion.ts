import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_createValidateEquals_AtomicUnion = _test_validateEquals(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)(typia.createValidateEquals<AtomicUnion>());
