import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TagFormat } from "../../structures/TagFormat";

export const test_json_isStringify_TagFormat =
    _test_json_isStringify<TagFormat>(TagFormat)(
        typia.json.createIsStringify<TagFormat>(),
    );
