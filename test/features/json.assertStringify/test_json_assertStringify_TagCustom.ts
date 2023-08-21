import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TagCustom } from "../../structures/TagCustom";

export const test_json_assertStringify_TagCustom = _test_json_assertStringify(
    "TagCustom",
)<TagCustom>(TagCustom)((input) =>
    typia.json.assertStringify<TagCustom>(input),
);
