import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_json_assertStringifyCustom_ObjectHierarchical =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectHierarchical",
  )<ObjectHierarchical>(ObjectHierarchical)((input) =>
    typia.json.assertStringify<ObjectHierarchical>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
