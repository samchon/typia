import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_json_assertParseCustom_TypeTagTuple = (): void =>
  _test_json_assertParse(CustomGuardError)("TypeTagTuple")<TypeTagTuple>(
    TypeTagTuple,
  )((input) =>
    typia.json.assertParse<TypeTagTuple>(input, (p) => new CustomGuardError(p)),
  );
