import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { MapSimple } from "../../structures/MapSimple";

export const test_json_validateParse_MapSimple = _test_json_validateParse(
    "MapSimple",
)<MapSimple>(MapSimple)((input) => typia.json.validateParse<MapSimple>(input));
