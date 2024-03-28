import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_json_assertStringifyCustom_ObjectDynamic =
  _test_json_assertStringify(CustomGuardError)("ObjectDynamic")<ObjectDynamic>(
    ObjectDynamic,
  )((input) =>
    typia.json.assertStringify<ObjectDynamic>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
