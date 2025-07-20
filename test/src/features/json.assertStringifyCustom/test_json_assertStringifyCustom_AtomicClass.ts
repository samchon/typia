import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_json_assertStringifyCustom_AtomicClass = (): void =>
  _test_json_assertStringify(CustomGuardError)("AtomicClass")<AtomicClass>(
    AtomicClass,
  )((input) =>
    typia.json.assertStringify<AtomicClass>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
