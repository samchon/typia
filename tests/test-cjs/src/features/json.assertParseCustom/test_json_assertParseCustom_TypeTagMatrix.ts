import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_json_assertParseCustom_TypeTagMatrix = (): void =>
  _test_json_assertParse(CustomGuardError)("TypeTagMatrix")<TypeTagMatrix>(
    TypeTagMatrix,
  )((input) =>
    typia.json.assertParse<TypeTagMatrix>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
