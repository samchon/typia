import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_json_createIsParse_TupleHierarchical = (): void =>
  _test_json_isParse("TupleHierarchical")<TupleHierarchical>(TupleHierarchical)(
    typia.json.createIsParse<TupleHierarchical>(),
  );
