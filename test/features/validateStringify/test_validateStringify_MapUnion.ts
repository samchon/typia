import TSON from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_MapUnion = _test_validateStringify(
    "MapUnion",
    MapUnion.generate,
    (input) => TSON.validateStringify(input),
    MapUnion.SPOILERS,
);
