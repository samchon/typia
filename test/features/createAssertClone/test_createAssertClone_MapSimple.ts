import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { MapSimple } from "../../structures/MapSimple";

export const test_createAssertClone_MapSimple = _test_assertClone(
    "MapSimple",
    MapSimple.generate,
    typia.createAssertClone<MapSimple>(),
    MapSimple.SPOILERS,
);
