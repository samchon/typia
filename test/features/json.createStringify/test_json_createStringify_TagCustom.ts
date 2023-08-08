import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TagCustom } from "../../structures/TagCustom";

export const test_json_stringify_TagCustom = _test_json_stringify(
    "TagCustom",
    TagCustom.generate,
    typia.json.createStringify<TagCustom>(),
);
