import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { MapUnion } from "../../structures/MapUnion";

export const test_json_validateParse_MapUnion = _test_json_validateParse(
    "MapUnion",
)<MapUnion>(MapUnion)(typia.json.createValidateParse<MapUnion>());
