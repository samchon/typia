import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { MapSimple } from "../../structures/MapSimple";

export const test_assertStringify_MapSimple = _test_assertStringify(
    "MapSimple",
    MapSimple.generate,
    (input) => typia.assertStringify(input),
    MapSimple.SPOILERS,
);
