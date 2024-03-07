import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectAlias } from "../../structures/ObjectAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ObjectAlias =
  _test_json_assertStringify(CustomGuardError)("ObjectAlias")<ObjectAlias>(
    ObjectAlias,
  )((input) =>
    typia.json.assertStringify<ObjectAlias>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
