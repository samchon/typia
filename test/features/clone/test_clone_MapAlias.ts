import TSON from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_MapAlias = _test_clone(
    "MapAlias",
    MapAlias.generate,
    (input) => TSON.clone(input),
);