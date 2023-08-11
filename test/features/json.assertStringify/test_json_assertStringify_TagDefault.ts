import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TagDefault } from "../../structures/TagDefault";

export const test_json_assertStringify_TagDefault =
    _test_json_assertStringify<TagDefault>(TagDefault)((input) =>
        typia.json.assertStringify<TagDefault>(input),
    );
