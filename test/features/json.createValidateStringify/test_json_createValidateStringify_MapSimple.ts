import typia from "../../../src";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { MapSimple } from "../../structures/MapSimple";

export const test_json_createValidateStringify_MapSimple = _test_json_validateStringify(
    "MapSimple",
)<MapSimple>(
    MapSimple
)(typia.json.createValidateStringify<MapSimple>());
