import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_json_assertStringifyCustom_ObjectDescription =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectDescription",
  )<ObjectDescription>(ObjectDescription)((input) =>
    typia.json.assertStringify<ObjectDescription>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
