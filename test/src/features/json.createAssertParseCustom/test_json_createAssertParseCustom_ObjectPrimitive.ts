import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_json_createAssertParseCustom_ObjectPrimitive =
  _test_json_assertParse(CustomGuardError)("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )(
    typia.json.createAssertParse<ObjectPrimitive>(
      (p) => new CustomGuardError(p),
    ),
  );
