import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_json_assertStringify_AtomicClass = _test_json_assertStringify(
  TypeGuardError,
)("AtomicClass")<AtomicClass>(AtomicClass)((input) =>
  typia.json.assertStringify<AtomicClass>(input),
);
