import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { MapUnion } from "../../structures/MapUnion";

export const test_json_createIsStringify_MapUnion = _test_json_isStringify(
    "MapUnion",
)<MapUnion>(MapUnion)(typia.json.createIsStringify<MapUnion>());
