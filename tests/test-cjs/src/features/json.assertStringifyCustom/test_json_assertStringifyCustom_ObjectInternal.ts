import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_json_assertStringifyCustom_ObjectInternal = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "ObjectInternal",
  )<ObjectInternal>(ObjectInternal)((input) =>
    typia.json.assertStringify<ObjectInternal>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
