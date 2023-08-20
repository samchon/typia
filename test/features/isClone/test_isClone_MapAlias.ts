import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { MapAlias } from "../../structures/MapAlias";

export const test_isClone_MapAlias = _test_isClone(
    "MapAlias",
    MapAlias.generate,
    (input) => typia.isClone<MapAlias>(input),
    MapAlias.SPOILERS,
);
