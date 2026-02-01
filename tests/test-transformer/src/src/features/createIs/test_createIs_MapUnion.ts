import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { MapUnion } from "../../structures/MapUnion";

export const test_createIs_MapUnion = (): void => _test_is(
    "MapUnion",
)<MapUnion>(
    MapUnion
)(typia.createIs<MapUnion>());
