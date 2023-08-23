import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { MapSimple } from "../../structures/MapSimple";

export const test_json_assertParse_MapSimple = _test_json_assertParse(
    "MapSimple",
)<MapSimple>(MapSimple)((input) => typia.json.assertParse<MapSimple>(input));
