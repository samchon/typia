import TSON from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_map_union = _test_assert_type(
    "union map",
    MapUnion.generate,
    (input) => TSON.assertType(input),
    MapUnion.SPOILERS,
);
