import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { MapSimple } from "../../structures/MapSimple";

export const test_validateStringify_MapSimple = _test_validateStringify(
    "MapSimple",
    MapSimple.generate,
    (input) => typia.validateStringify<MapSimple>(input),
    MapSimple.SPOILERS,
);
