import TSON from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_map_alias = _test_assert(
    "aliased map",
    MapAlias.generate,
    (input) => TSON.assert(input),
    MapAlias.SPOILERS,
);
