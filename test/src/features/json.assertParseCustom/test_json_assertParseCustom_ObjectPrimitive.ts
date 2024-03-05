import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_json_assertParseCustom_ObjectPrimitive =
  _test_json_assertParse(CustomGuardError)("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )((input) =>
    typia.json.assertParse<ObjectPrimitive>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
