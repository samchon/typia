import TSON from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_MapSimple = _test_validateStringify(
    "MapSimple",
    MapSimple.generate,
    TSON.createValidateStringify<MapSimple>(),
    MapSimple.SPOILERS,
);
