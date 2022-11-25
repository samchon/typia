import TSON from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_map_union = _test_validate(
    "union map",
    MapUnion.generate,
    (input) => TSON.validate(input),
    MapUnion.SPOILERS,
);
