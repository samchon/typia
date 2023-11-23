import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_json_assertStringify_AtomicAlias = _test_json_assertStringify(
  "AtomicAlias",
)<AtomicAlias>(AtomicAlias)((input) =>
  typia.json.assertStringify<AtomicAlias>(input),
);
