import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_json_createAssertParseCustom_ObjectNullable = (): void =>
  _test_json_assertParse(CustomGuardError)("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )(
    typia.json.createAssertParse<ObjectNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
