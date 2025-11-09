import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_json_assertParseCustom_ObjectNullable = (): void =>
  _test_json_assertParse(CustomGuardError)("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )((input) =>
    typia.json.assertParse<ObjectNullable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
