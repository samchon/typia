import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_json_isStringify_TagObjectUnion = _test_json_isStringify(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.json.createIsStringify<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
