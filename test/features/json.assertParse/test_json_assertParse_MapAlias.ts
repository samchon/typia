import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { MapAlias } from "../../structures/MapAlias";

export const test_json_assertParse_MapAlias = _test_json_assertParse(
    "MapAlias",
)<MapAlias>(MapAlias)((input) => typia.json.assertParse<MapAlias>(input));
