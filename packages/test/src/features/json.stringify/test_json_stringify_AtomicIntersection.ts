import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_json_stringify_AtomicIntersection = _test_json_stringify(
  "AtomicIntersection",
)<AtomicIntersection>(AtomicIntersection)((input) =>
  typia.json.stringify<AtomicIntersection>(input),
);
