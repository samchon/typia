import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_json_assertStringifyCustom_ObjectGenericArray = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "ObjectGenericArray",
  )<ObjectGenericArray>(ObjectGenericArray)((input) =>
    typia.json.assertStringify<ObjectGenericArray>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
