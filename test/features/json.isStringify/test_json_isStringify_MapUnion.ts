import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { MapUnion } from "../../structures/MapUnion";

export const test_json_isStringify_MapUnion = _test_json_isStringify<MapUnion>(
    MapUnion,
)((input) => typia.json.isStringify<MapUnion>(input));
