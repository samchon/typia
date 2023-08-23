import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { MapUnion } from "../../structures/MapUnion";

export const test_json_isParse_MapUnion = _test_json_isParse(
    "MapUnion",
)<MapUnion>(MapUnion)(typia.json.createIsParse<MapUnion>());
