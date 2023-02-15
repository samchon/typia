import typia from "typia";

import { MapUnion } from "../../structures/MapUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_MapUnion = _test_stringify(
    "MapUnion",
    MapUnion.generate,
    (input) => typia.stringify(input),
);
