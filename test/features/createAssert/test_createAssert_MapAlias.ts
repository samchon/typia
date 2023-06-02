import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { MapAlias } from "../../structures/MapAlias";

export const test_createAssert_MapAlias = _test_assert(
    "MapAlias",
    MapAlias.generate,
    typia.createAssert<MapAlias>(),
    MapAlias.SPOILERS,
);
