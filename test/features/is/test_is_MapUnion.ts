import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { MapUnion } from "../../structures/MapUnion";

export const test_is_MapUnion = _test_is(
    "MapUnion",
    MapUnion.generate,
    (input) => typia.is(input),
    MapUnion.SPOILERS,
);
