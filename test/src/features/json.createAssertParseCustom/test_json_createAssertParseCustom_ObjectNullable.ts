import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectNullable } from "../../structures/ObjectNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ObjectNullable =
  _test_json_assertParse(CustomGuardError)("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )(
    typia.json.createAssertParse<ObjectNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
