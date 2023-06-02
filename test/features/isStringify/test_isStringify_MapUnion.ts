import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { MapUnion } from "../../structures/MapUnion";

export const test_isStringify_MapUnion = _test_isStringify(
    "MapUnion",
    MapUnion.generate,
    (input) => typia.isStringify(input),
    MapUnion.SPOILERS,
);
