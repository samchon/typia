import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TagPattern } from "../../structures/TagPattern";

export const test_json_stringify_TagPattern = _test_json_stringify<TagPattern>(
    TagPattern,
)(typia.json.createStringify<TagPattern>());
