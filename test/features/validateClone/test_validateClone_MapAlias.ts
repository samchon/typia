import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { MapAlias } from "../../structures/MapAlias";

export const test_validateClone_MapAlias = _test_validateClone(
    "MapAlias",
    MapAlias.generate,
    (input) => typia.validateClone<MapAlias>(input),
    MapAlias.SPOILERS,
);
