import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TagArrayUnion } from "../../structures/TagArrayUnion";

export const test_json_assertParse_TagArrayUnion = _test_json_assertParse(
    "TagArrayUnion",
)<TagArrayUnion>(TagArrayUnion)(typia.json.createAssertParse<TagArrayUnion>());
