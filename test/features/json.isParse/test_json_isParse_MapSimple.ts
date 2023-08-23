import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { MapSimple } from "../../structures/MapSimple";

export const test_json_isParse_MapSimple = _test_json_isParse(
    "MapSimple",
)<MapSimple>(MapSimple)((input) => typia.json.isParse<MapSimple>(input));
