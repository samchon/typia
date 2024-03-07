import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicClass } from "../../structures/AtomicClass";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_AtomicClass = _test_json_assertParse(
  CustomGuardError,
)("AtomicClass")<AtomicClass>(AtomicClass)((input) =>
  typia.json.assertParse<AtomicClass>(input, (p) => new CustomGuardError(p)),
);
