import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_json_assertStringifyCustom_ObjectDate =
  _test_json_assertStringify(CustomGuardError)("ObjectDate")<ObjectDate>(
    ObjectDate,
  )((input) =>
    typia.json.assertStringify<ObjectDate>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
