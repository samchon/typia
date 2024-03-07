import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicSimple } from "../../structures/AtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_AtomicSimple =
  _test_json_assertStringify(CustomGuardError)("AtomicSimple")<AtomicSimple>(
    AtomicSimple,
  )(
    typia.json.createAssertStringify<AtomicSimple>(
      (p) => new CustomGuardError(p),
    ),
  );
