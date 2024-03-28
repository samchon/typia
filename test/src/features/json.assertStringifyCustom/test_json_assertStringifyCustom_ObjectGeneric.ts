import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_json_assertStringifyCustom_ObjectGeneric =
  _test_json_assertStringify(CustomGuardError)("ObjectGeneric")<ObjectGeneric>(
    ObjectGeneric,
  )((input) =>
    typia.json.assertStringify<ObjectGeneric>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
