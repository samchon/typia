import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_validate_AtomicUnion = _test_validate(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)((input) => typia.validate<AtomicUnion>(input));
