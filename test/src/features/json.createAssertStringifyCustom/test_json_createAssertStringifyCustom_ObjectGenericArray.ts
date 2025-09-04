import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_json_createAssertStringifyCustom_ObjectGenericArray =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "ObjectGenericArray",
    )<ObjectGenericArray>(ObjectGenericArray)(
      typia.json.createAssertStringify<ObjectGenericArray>(
        (p) => new CustomGuardError(p),
      ),
    );
