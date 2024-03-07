import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_AtomicIntersection =
  _test_json_assertParse(CustomGuardError)(
    "AtomicIntersection",
  )<AtomicIntersection>(AtomicIntersection)((input) =>
    typia.json.assertParse<AtomicIntersection>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
