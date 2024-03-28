import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_json_assertStringifyCustom_ObjectPropertyNullable =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)((input) =>
    typia.json.assertStringify<ObjectPropertyNullable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
