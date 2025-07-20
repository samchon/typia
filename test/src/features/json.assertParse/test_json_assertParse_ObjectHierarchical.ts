import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_json_assertParse_ObjectHierarchical = (): void =>
  _test_json_assertParse(TypeGuardError)(
    "ObjectHierarchical",
  )<ObjectHierarchical>(ObjectHierarchical)((input) =>
    typia.json.assertParse<ObjectHierarchical>(input),
  );
