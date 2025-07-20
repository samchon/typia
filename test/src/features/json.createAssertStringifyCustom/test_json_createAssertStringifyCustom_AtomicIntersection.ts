import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_json_createAssertStringifyCustom_AtomicIntersection =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "AtomicIntersection",
    )<AtomicIntersection>(AtomicIntersection)(
      typia.json.createAssertStringify<AtomicIntersection>(
        (p) => new CustomGuardError(p),
      ),
    );
