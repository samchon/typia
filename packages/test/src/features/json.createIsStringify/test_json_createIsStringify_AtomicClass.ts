import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_json_createIsStringify_AtomicClass = _test_json_isStringify(
  "AtomicClass",
)<AtomicClass>(AtomicClass)(typia.json.createIsStringify<AtomicClass>());
