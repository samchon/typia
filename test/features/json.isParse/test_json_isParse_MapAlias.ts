import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { MapAlias } from "../../structures/MapAlias";

export const test_json_isParse_MapAlias = _test_json_isParse(
    "MapAlias",
)<MapAlias>(MapAlias)((input) => typia.json.isParse<MapAlias>(input));
