import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_json_isParse_TagObjectUnion = _test_json_isParse(
    "TagObjectUnion",
)<TagObjectUnion>(TagObjectUnion)((input) =>
    typia.json.isParse<TagObjectUnion>(input),
);
