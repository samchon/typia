import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_json_createIsStringify_TupleHierarchical =
  _test_json_isStringify("TupleHierarchical")<TupleHierarchical>(
    TupleHierarchical,
  )(typia.json.createIsStringify<TupleHierarchical>());
