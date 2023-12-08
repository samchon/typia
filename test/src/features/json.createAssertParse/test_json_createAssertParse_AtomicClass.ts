import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_json_createAssertParse_AtomicClass = _test_json_assertParse(
  "AtomicClass",
)<AtomicClass>(AtomicClass)(typia.json.createAssertParse<AtomicClass>());
