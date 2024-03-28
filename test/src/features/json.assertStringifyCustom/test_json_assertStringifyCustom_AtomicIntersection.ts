import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_json_assertStringifyCustom_AtomicIntersection =
  _test_json_assertStringify(CustomGuardError)(
    "AtomicIntersection",
  )<AtomicIntersection>(AtomicIntersection)((input) =>
    typia.json.assertStringify<AtomicIntersection>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
