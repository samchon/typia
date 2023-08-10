import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TagFormat } from "../../structures/TagFormat";

export const test_json_assertStringify_TagFormat =
    _test_json_assertStringify<TagFormat>(TagFormat)((input) =>
        typia.json.assertStringify<TagFormat>(input),
    );
