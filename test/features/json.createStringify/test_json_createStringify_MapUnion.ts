import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { MapUnion } from "../../structures/MapUnion";

export const test_json_createStringify_MapUnion = _test_json_stringify(
    "MapUnion",
)<MapUnion>(MapUnion)(typia.json.createStringify<MapUnion>());
