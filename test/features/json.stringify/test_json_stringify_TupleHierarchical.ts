import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_json_stringify_TupleHierarchical =
    _test_json_stringify<TupleHierarchical>(TupleHierarchical)((input) =>
        typia.json.stringify(input),
    );
