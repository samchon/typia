import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_json_createAssertStringifyCustom_ObjectGenericAlias =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "ObjectGenericAlias",
    )<ObjectGenericAlias>(ObjectGenericAlias)(
      typia.json.createAssertStringify<ObjectGenericAlias>(
        (p) => new CustomGuardError(p),
      ),
    );
