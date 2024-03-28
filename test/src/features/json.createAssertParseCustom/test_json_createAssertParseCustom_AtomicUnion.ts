import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_json_createAssertParseCustom_AtomicUnion =
  _test_json_assertParse(CustomGuardError)("AtomicUnion")<AtomicUnion>(
    AtomicUnion,
  )(typia.json.createAssertParse<AtomicUnion>((p) => new CustomGuardError(p)));
