import typia from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_MapAlias = _test_assertStringify(
    "MapAlias",
    MapAlias.generate,
    (input) => typia.assertStringify(input),
    MapAlias.SPOILERS,
);
