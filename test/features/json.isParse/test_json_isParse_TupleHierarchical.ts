import typia from "../../../src";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_json_isParse_TupleHierarchical = _test_json_isParse(
    "TupleHierarchical",
)<TupleHierarchical>(
    TupleHierarchical
)((input) => typia.json.isParse<TupleHierarchical>(input));
