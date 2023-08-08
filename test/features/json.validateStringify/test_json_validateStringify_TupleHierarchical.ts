import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_json_validateStringify_TupleHierarchical =
    _test_json_validateStringify(
        "TupleHierarchical",
        TupleHierarchical.generate,
        (input) => typia.json.validateStringify(input),
        TupleHierarchical.SPOILERS,
    );
