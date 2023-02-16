import typia from "typia";

import { MapUnion } from "../../structures/MapUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_MapUnion = _test_assertStringify(
    "MapUnion",
    MapUnion.generate,
    (input) => typia.assertStringify(input),
    MapUnion.SPOILERS,
);
