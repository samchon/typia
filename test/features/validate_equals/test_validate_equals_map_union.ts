import TSON from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_validate_equals_map_union = _test_validate_equals(
    "union map",
    MapUnion.generate,
    (input) => TSON.validateEquals(input),
    false,
);
