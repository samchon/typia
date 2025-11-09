import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_json_assertParseCustom_TypeTagArray = (): void =>
  _test_json_assertParse(CustomGuardError)("TypeTagArray")<TypeTagArray>(
    TypeTagArray,
  )((input) =>
    typia.json.assertParse<TypeTagArray>(input, (p) => new CustomGuardError(p)),
  );
