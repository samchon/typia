import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_json_createAssertStringifyCustom_ObjectIntersection =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "ObjectIntersection",
    )<ObjectIntersection>(ObjectIntersection)(
      typia.json.createAssertStringify<ObjectIntersection>(
        (p) => new CustomGuardError(p),
      ),
    );
