import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_json_createAssertParse_TupleHierarchical =
    _test_json_assertParse("TupleHierarchical")<TupleHierarchical>(
        TupleHierarchical,
    )(typia.json.createAssertParse<TupleHierarchical>());
