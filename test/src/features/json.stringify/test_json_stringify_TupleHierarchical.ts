import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_json_stringify_TupleHierarchical = (): void =>
  _test_json_stringify("TupleHierarchical")<TupleHierarchical>(
    TupleHierarchical,
  )((input) => typia.json.stringify<TupleHierarchical>(input));
