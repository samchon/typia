import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ObjectPartial =
  _test_json_assertStringify(CustomGuardError)("ObjectPartial")<ObjectPartial>(
    ObjectPartial,
  )((input) =>
    typia.json.assertStringify<ObjectPartial>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
