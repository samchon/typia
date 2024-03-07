import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicClass } from "../../structures/AtomicClass";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_AtomicClass = _test_json_assertStringify(
  TypeGuardError,
)("AtomicClass")<AtomicClass>(AtomicClass)((input) =>
  typia.json.assertStringify<AtomicClass>(input),
);
