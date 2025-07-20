import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_json_createAssertStringifyCustom_ObjectDynamic = (): void =>
  _test_json_assertStringify(CustomGuardError)("ObjectDynamic")<ObjectDynamic>(
    ObjectDynamic,
  )(
    typia.json.createAssertStringify<ObjectDynamic>(
      (p) => new CustomGuardError(p),
    ),
  );
