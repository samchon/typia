import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TagCustom } from "../../structures/TagCustom";

export const test_json_isStringify_TagCustom = _test_json_isStringify(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.json.isStringify(input),
    TagCustom.SPOILERS,
);
