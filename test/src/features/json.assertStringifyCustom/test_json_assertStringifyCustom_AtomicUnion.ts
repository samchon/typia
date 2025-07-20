import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_json_assertStringifyCustom_AtomicUnion = (): void =>
  _test_json_assertStringify(CustomGuardError)("AtomicUnion")<AtomicUnion>(
    AtomicUnion,
  )((input) =>
    typia.json.assertStringify<AtomicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
