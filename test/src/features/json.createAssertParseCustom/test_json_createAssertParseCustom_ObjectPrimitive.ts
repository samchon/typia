import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ObjectPrimitive =
  _test_json_assertParse(CustomGuardError)("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )(
    typia.json.createAssertParse<ObjectPrimitive>(
      (p) => new CustomGuardError(p),
    ),
  );
