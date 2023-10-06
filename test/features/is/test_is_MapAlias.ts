import typia from "../../../src";

import { _test_is } from "../../internal/_test_is";
import { MapAlias } from "../../structures/MapAlias";

export const test_is_MapAlias = _test_is(
    "MapAlias",
)<MapAlias>(
    MapAlias
)((input) => typia.is<MapAlias>(input));
