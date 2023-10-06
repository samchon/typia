import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { MapSimple } from "../../structures/MapSimple";

export const test_json_createStringify_MapSimple = _test_json_stringify(
    "MapSimple",
)<MapSimple>(MapSimple)(typia.json.createStringify<MapSimple>());
