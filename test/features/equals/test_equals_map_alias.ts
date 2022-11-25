import TSON from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_map_alias = _test_equals(
    "aliased map",
    MapAlias.generate,
    (input) => TSON.equals(input),
);
