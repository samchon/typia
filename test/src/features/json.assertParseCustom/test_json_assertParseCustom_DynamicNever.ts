import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_json_assertParseCustom_DynamicNever = (): void =>
  _test_json_assertParse(CustomGuardError)("DynamicNever")<DynamicNever>(
    DynamicNever,
  )((input) =>
    typia.json.assertParse<DynamicNever>(input, (p) => new CustomGuardError(p)),
  );
