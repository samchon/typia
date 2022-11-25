import TSON from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_map_alias = _test_is_stringify(
    "aliased map",
    MapAlias.generate,
    (input) => TSON.isStringify(input),
    MapAlias.SPOILERS,
);
