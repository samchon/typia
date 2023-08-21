import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TagArrayUnion } from "../../structures/TagArrayUnion";

export const test_json_isParse_TagArrayUnion = _test_json_isParse(
    "TagArrayUnion",
)<TagArrayUnion>(TagArrayUnion)((input) =>
    typia.json.isParse<TagArrayUnion>(input),
);
