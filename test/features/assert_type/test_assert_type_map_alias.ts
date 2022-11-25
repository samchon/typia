import TSON from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_map_alias = _test_assert_type(
    "aliased map",
    MapAlias.generate,
    (input) => TSON.assertType(input),
    MapAlias.SPOILERS,
);
