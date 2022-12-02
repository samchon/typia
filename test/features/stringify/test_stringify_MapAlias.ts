import TSON from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_MapAlias = _test_stringify(
    "MapAlias",
    MapAlias.generate,
    (input) => TSON.stringify(input),
);
