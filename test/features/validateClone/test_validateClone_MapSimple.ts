import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { MapSimple } from "../../structures/MapSimple";

export const test_validateClone_MapSimple = _test_validateClone(
    "MapSimple",
    MapSimple.generate,
    (input) => typia.validateClone(input),
    MapSimple.SPOILERS,
);
