import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_json_createAssertStringifyCustom_AtomicAlias = (): void =>
  _test_json_assertStringify(CustomGuardError)("AtomicAlias")<AtomicAlias>(
    AtomicAlias,
  )(
    typia.json.createAssertStringify<AtomicAlias>(
      (p) => new CustomGuardError(p),
    ),
  );
