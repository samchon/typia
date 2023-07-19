import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TagRange } from "../../structures/TagRange";

export const test_json_assertStringify_TagRange =
    _test_json_assertStringify<TagRange>(TagRange)((input) =>
        typia.json.assertStringify(input),
    );
