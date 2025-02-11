import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_createIs_AtomicIntersection = _test_is(
  "AtomicIntersection",
)<AtomicIntersection>(AtomicIntersection)(typia.createIs<AtomicIntersection>());
