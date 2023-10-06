import typia from "../../../src";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { MapSimple } from "../../structures/MapSimple";

export const test_json_isStringify_MapSimple = _test_json_isStringify(
    "MapSimple",
)<MapSimple>(
    MapSimple
)((input) => typia.json.isStringify<MapSimple>(input));
