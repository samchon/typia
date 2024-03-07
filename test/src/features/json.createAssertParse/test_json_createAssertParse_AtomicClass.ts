import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicClass } from "../../structures/AtomicClass";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_AtomicClass = _test_json_assertParse(
  TypeGuardError,
)("AtomicClass")<AtomicClass>(AtomicClass)(
  typia.json.createAssertParse<AtomicClass>(),
);
