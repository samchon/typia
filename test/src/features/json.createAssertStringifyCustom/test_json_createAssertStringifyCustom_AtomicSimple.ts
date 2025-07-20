import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_json_createAssertStringifyCustom_AtomicSimple = (): void =>
  _test_json_assertStringify(CustomGuardError)("AtomicSimple")<AtomicSimple>(
    AtomicSimple,
  )(
    typia.json.createAssertStringify<AtomicSimple>(
      (p) => new CustomGuardError(p),
    ),
  );
