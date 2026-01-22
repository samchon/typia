import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_json_assertParseCustom_TypeTagPattern = (): void =>
  _test_json_assertParse(CustomGuardError)("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )((input) =>
    typia.json.assertParse<TypeTagPattern>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
