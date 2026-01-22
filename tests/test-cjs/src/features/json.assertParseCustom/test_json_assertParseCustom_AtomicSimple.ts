import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_json_assertParseCustom_AtomicSimple = (): void =>
  _test_json_assertParse(CustomGuardError)("AtomicSimple")<AtomicSimple>(
    AtomicSimple,
  )((input) =>
    typia.json.assertParse<AtomicSimple>(input, (p) => new CustomGuardError(p)),
  );
