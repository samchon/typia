import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_json_assertStringifyCustom_TypeTagTuple =
  _test_json_assertStringify(CustomGuardError)("TypeTagTuple")<TypeTagTuple>(
    TypeTagTuple,
  )((input) =>
    typia.json.assertStringify<TypeTagTuple>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
