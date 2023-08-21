import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_json_assertParse_TagObjectUnion = _test_json_assertParse(
    "TagObjectUnion",
)<TagObjectUnion>(TagObjectUnion)(
    typia.json.createAssertParse<TagObjectUnion>(),
);
