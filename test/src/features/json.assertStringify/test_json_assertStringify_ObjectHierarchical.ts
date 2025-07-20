import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_json_assertStringify_ObjectHierarchical = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "ObjectHierarchical",
  )<ObjectHierarchical>(ObjectHierarchical)((input) =>
    typia.json.assertStringify<ObjectHierarchical>(input),
  );
