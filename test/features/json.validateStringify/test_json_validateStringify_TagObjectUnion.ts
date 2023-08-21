import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_json_validateStringify_TagObjectUnion =
    _test_json_validateStringify("TagObjectUnion")<TagObjectUnion>(
        TagObjectUnion,
    )((input) => typia.json.validateStringify<TagObjectUnion>(input));
