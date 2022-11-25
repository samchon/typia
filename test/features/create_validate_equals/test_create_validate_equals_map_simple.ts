import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_create_validate_equals_map_simple = _test_validate_equals(
    "simple map",
    MapSimple.generate,
    TSON.createValidateEquals<MapSimple>(),
    false,
);
