import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TagArrayUnion } from "../../structures/TagArrayUnion";

export const test_json_stringify_TagArrayUnion = _test_json_stringify(
    "TagArrayUnion",
)<TagArrayUnion>(TagArrayUnion)((input) =>
    typia.json.stringify<TagArrayUnion>(input),
);
