import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_createValidateEquals_AtomicIntersection = (): void =>
  _test_validateEquals("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection,
  )(typia.createValidateEquals<AtomicIntersection>());
