import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_json_assertParse_AtomicClass = _test_json_assertParse(
  "AtomicClass",
)<AtomicClass>(AtomicClass)((input) =>
  typia.json.assertParse<AtomicClass>(input),
);
