import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_json_createAssertStringifyCustom_ObjectPartial =
  _test_json_assertStringify(CustomGuardError)("ObjectPartial")<ObjectPartial>(
    ObjectPartial,
  )(
    typia.json.createAssertStringify<ObjectPartial>(
      (p) => new CustomGuardError(p),
    ),
  );
