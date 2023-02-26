import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { MapAlias } from "../../structures/MapAlias";

export const test_assertClone_MapAlias = _test_assertClone(
    "MapAlias",
    MapAlias.generate,
    (input) => typia.assertClone(input),
    MapAlias.SPOILERS,
);
