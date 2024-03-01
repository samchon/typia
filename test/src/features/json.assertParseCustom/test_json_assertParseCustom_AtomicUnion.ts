import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_json_assertParseCustom_AtomicUnion = _test_json_assertParse(
  CustomGuardError,
)("AtomicUnion")<AtomicUnion>(AtomicUnion)((input) =>
  typia.json.assertParse<AtomicUnion>(input, (p) => new CustomGuardError(p)),
);
