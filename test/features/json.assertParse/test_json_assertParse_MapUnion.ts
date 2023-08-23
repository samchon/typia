import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { MapUnion } from "../../structures/MapUnion";

export const test_json_assertParse_MapUnion = _test_json_assertParse(
    "MapUnion",
)<MapUnion>(MapUnion)((input) => typia.json.assertParse<MapUnion>(input));
