import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicSimple } from "../../structures/AtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_AtomicSimple =
  _test_json_assertStringify(CustomGuardError)("AtomicSimple")<AtomicSimple>(
    AtomicSimple,
  )((input) =>
    typia.json.assertStringify<AtomicSimple>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
