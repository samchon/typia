import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { MapAlias } from "../../structures/MapAlias";

export const test_misc_isClone_MapAlias = _test_misc_isClone(
    "MapAlias",
    MapAlias.generate,
    typia.misc.createIsClone<MapAlias>(),
    MapAlias.SPOILERS,
);
