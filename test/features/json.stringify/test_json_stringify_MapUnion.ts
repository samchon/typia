import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { MapUnion } from "../../structures/MapUnion";

export const test_json_stringify_MapUnion = _test_json_stringify(
    "MapUnion",
)<MapUnion>(
    MapUnion
)((input) => typia.json.stringify<MapUnion>(input));
