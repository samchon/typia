import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { MapAlias } from "../../structures/MapAlias";

export const test_misc_assertClone_MapAlias = _test_misc_assertClone(
    "MapAlias",
    MapAlias.generate,
    (input) => typia.misc.assertClone(input),
    MapAlias.SPOILERS,
);
