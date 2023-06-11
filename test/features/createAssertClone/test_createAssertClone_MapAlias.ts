import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { MapAlias } from "../../structures/MapAlias";

export const test_createAssertClone_MapAlias = _test_assertClone(
    "MapAlias",
    MapAlias.generate,
    typia.createAssertClone<MapAlias>(),
    MapAlias.SPOILERS,
);
