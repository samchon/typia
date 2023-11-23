import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_json_assertStringify_ObjectHierarchical =
  _test_json_assertStringify("ObjectHierarchical")<ObjectHierarchical>(
    ObjectHierarchical,
  )((input) => typia.json.assertStringify<ObjectHierarchical>(input));
