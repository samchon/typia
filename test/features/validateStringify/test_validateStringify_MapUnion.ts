import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { MapUnion } from "../../structures/MapUnion";

export const test_validateStringify_MapUnion = _test_validateStringify(
    "MapUnion",
    MapUnion.generate,
    (input) => typia.validateStringify(input),
    MapUnion.SPOILERS,
);
