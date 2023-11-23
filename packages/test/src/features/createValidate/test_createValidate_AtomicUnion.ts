import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_createValidate_AtomicUnion = _test_validate(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)(typia.createValidate<AtomicUnion>());
