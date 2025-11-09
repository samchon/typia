import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_json_createAssertStringifyCustom_ObjectHierarchical =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "ObjectHierarchical",
    )<ObjectHierarchical>(ObjectHierarchical)(
      typia.json.createAssertStringify<ObjectHierarchical>(
        (p) => new CustomGuardError(p),
      ),
    );
