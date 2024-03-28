import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_json_assertStringifyCustom_ObjectPartial =
  _test_json_assertStringify(CustomGuardError)("ObjectPartial")<ObjectPartial>(
    ObjectPartial,
  )((input) =>
    typia.json.assertStringify<ObjectPartial>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
