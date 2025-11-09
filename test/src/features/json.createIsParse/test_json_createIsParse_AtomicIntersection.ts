import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_json_createIsParse_AtomicIntersection = (): void =>
  _test_json_isParse("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection,
  )(typia.json.createIsParse<AtomicIntersection>());
