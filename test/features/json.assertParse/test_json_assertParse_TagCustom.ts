import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TagCustom } from "../../structures/TagCustom";

export const test_json_assertParse_TagCustom = _test_json_assertParse(
    "TagCustom",
)<TagCustom>(TagCustom)((input) => typia.json.assertParse<TagCustom>(input));
