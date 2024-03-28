import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_json_createAssertStringifyCustom_AtomicClass =
  _test_json_assertStringify(CustomGuardError)("AtomicClass")<AtomicClass>(
    AtomicClass,
  )(
    typia.json.createAssertStringify<AtomicClass>(
      (p) => new CustomGuardError(p),
    ),
  );
