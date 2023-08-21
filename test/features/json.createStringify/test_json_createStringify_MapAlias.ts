import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { MapAlias } from "../../structures/MapAlias";

export const test_json_stringify_MapAlias = _test_json_stringify(
    "MapAlias",
)<MapAlias>(MapAlias)(typia.json.createStringify<MapAlias>());
