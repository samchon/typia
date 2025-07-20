import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_json_createAssertStringifyCustom_ObjectGeneric = (): void =>
  _test_json_assertStringify(CustomGuardError)("ObjectGeneric")<ObjectGeneric>(
    ObjectGeneric,
  )(
    typia.json.createAssertStringify<ObjectGeneric>(
      (p) => new CustomGuardError(p),
    ),
  );
