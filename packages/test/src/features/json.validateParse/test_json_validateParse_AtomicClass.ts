import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_json_validateParse_AtomicClass = _test_json_validateParse(
  "AtomicClass",
)<AtomicClass>(AtomicClass)((input) =>
  typia.json.validateParse<AtomicClass>(input),
);
