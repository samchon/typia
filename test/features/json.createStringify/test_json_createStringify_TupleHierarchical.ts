import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_json_createStringify_TupleHierarchical = _test_json_stringify(
    "TupleHierarchical",
)<TupleHierarchical>(TupleHierarchical)(
    typia.json.createStringify<TupleHierarchical>(),
);
