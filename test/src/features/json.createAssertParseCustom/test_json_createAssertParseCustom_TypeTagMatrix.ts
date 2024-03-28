import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_json_createAssertParseCustom_TypeTagMatrix =
  _test_json_assertParse(CustomGuardError)("TypeTagMatrix")<TypeTagMatrix>(
    TypeTagMatrix,
  )(
    typia.json.createAssertParse<TypeTagMatrix>((p) => new CustomGuardError(p)),
  );
