import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_json_createIsStringify_ObjectHierarchical =
  _test_json_isStringify("ObjectHierarchical")<ObjectHierarchical>(
    ObjectHierarchical,
  )(typia.json.createIsStringify<ObjectHierarchical>());
