import TSON from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_map_union = _test_stringify(
    "union map",
    MapUnion.generate,
    (input) => TSON.stringify(input),
);
