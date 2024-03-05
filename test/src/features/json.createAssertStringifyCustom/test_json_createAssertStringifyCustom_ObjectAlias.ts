import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_json_createAssertStringifyCustom_ObjectAlias =
  _test_json_assertStringify(CustomGuardError)("ObjectAlias")<ObjectAlias>(
    ObjectAlias,
  )(
    typia.json.createAssertStringify<ObjectAlias>(
      (p) => new CustomGuardError(p),
    ),
  );
