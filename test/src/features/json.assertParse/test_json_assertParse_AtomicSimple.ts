import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_json_assertParse_AtomicSimple = _test_json_assertParse(
  "AtomicSimple",
)<AtomicSimple>(AtomicSimple)((input) =>
  typia.json.assertParse<AtomicSimple>(input),
);
