import TSON from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_is } from "../internal/_test_is";

export const test_is_MapAlias = _test_is(
    "MapAlias",
    MapAlias.generate,
    (input) => TSON.is(input),
    MapAlias.SPOILERS,
);
