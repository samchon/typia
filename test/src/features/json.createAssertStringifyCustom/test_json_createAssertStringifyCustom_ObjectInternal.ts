import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_json_createAssertStringifyCustom_ObjectInternal = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "ObjectInternal",
  )<ObjectInternal>(ObjectInternal)(
    typia.json.createAssertStringify<ObjectInternal>(
      (p) => new CustomGuardError(p),
    ),
  );
