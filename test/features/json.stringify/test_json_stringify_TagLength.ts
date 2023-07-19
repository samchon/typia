import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TagLength } from "../../structures/TagLength";

export const test_json_stringify_TagLength = _test_json_stringify<TagLength>(
    TagLength,
)((input) => typia.json.stringify(input));
