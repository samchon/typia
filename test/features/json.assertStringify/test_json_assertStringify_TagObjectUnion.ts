import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_json_assertStringify_TagObjectUnion =
    _test_json_assertStringify("TagObjectUnion")<TagObjectUnion>(
        TagObjectUnion,
    )((input) => typia.json.assertStringify<TagObjectUnion>(input));
