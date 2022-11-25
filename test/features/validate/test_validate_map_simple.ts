import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_map_simple = _test_validate(
    "simple map",
    MapSimple.generate,
    (input) => TSON.validate(input),
    MapSimple.SPOILERS,
);
