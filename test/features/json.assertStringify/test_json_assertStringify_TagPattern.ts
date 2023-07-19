import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TagPattern } from "../../structures/TagPattern";

export const test_json_assertStringify_TagPattern =
    _test_json_assertStringify<TagPattern>(TagPattern)((input) =>
        typia.json.assertStringify(input),
    );
