import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_json_assertParseCustom_ArrayUnion = (): void =>
  _test_json_assertParse(CustomGuardError)("ArrayUnion")<ArrayUnion>(
    ArrayUnion,
  )((input) =>
    typia.json.assertParse<ArrayUnion>(input, (p) => new CustomGuardError(p)),
  );
