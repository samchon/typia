import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { MapSimple } from "../../structures/MapSimple";

export const test_isClone_MapSimple = _test_isClone(
    "MapSimple",
    MapSimple.generate,
    (input) => typia.isClone(input),
    MapSimple.SPOILERS,
);
