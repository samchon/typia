import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { MapAlias } from "../../structures/MapAlias";

export const test_assertStringify_MapAlias = _test_assertStringify(
    "MapAlias",
    MapAlias.generate,
    (input) => typia.assertStringify<MapAlias>(input),
    MapAlias.SPOILERS,
);
