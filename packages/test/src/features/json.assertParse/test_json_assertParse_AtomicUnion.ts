import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_json_assertParse_AtomicUnion = _test_json_assertParse(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)((input) =>
  typia.json.assertParse<AtomicUnion>(input),
);
