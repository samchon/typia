import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_map_simple = _test_validate(
    "simple map",
    MapSimple.generate,
    TSON.createValidate<MapSimple>(),
    MapSimple.SPOILERS,
);
