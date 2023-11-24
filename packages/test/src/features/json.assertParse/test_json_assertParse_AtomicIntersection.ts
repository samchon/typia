import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_json_assertParse_AtomicIntersection = _test_json_assertParse(
  "AtomicIntersection",
)<AtomicIntersection>(AtomicIntersection)((input) =>
  typia.json.assertParse<AtomicIntersection>(input),
);
