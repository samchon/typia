import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { MapAlias } from "../../structures/MapAlias";

export const test_json_validateParse_MapAlias = _test_json_validateParse(
    "MapAlias",
)<MapAlias>(MapAlias)(typia.json.createValidateParse<MapAlias>());
