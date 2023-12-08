import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_json_createIsStringify_AtomicAlias = _test_json_isStringify(
  "AtomicAlias",
)<AtomicAlias>(AtomicAlias)(typia.json.createIsStringify<AtomicAlias>());
