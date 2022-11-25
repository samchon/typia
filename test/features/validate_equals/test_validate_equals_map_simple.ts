import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_validate_equals_map_simple = _test_validate_equals(
    "simple map",
    MapSimple.generate,
    (input) => TSON.validateEquals(input),
    false,
);
