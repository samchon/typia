import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicAlias } from "../../structures/AtomicAlias";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_AtomicAlias = _test_json_assertStringify(
  TypeGuardError,
)("AtomicAlias")<AtomicAlias>(AtomicAlias)((input) =>
  typia.json.assertStringify<AtomicAlias>(input),
);
