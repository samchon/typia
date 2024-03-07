import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicUnion } from "../../structures/AtomicUnion";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_AtomicUnion = _test_json_assertStringify(
  TypeGuardError,
)("AtomicUnion")<AtomicUnion>(AtomicUnion)((input) =>
  typia.json.assertStringify<AtomicUnion>(input),
);
