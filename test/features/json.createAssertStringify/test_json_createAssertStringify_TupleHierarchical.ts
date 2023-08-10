import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_json_assertStringify_TupleHierarchical =
    _test_json_assertStringify<TupleHierarchical>(TupleHierarchical)(
        typia.json.createAssertStringify<TupleHierarchical>(),
    );
