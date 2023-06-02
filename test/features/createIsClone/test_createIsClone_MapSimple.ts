import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { MapSimple } from "../../structures/MapSimple";

export const test_createIsClone_MapSimple = _test_isClone(
    "MapSimple",
    MapSimple.generate,
    typia.createIsClone<MapSimple>(),
    MapSimple.SPOILERS,
);
