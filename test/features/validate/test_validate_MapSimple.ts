import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_MapSimple = _test_validate(
    "MapSimple",
    MapSimple.generate,
    (input) => TSON.validate(input),
    MapSimple.SPOILERS,
);
