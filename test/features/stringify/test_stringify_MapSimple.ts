import typia from "../../../src";

import { MapSimple } from "../../structures/MapSimple";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_stringify_MapSimple = _test_stringify(
    "MapSimple",
    MapSimple.generate,
    (input) => typia.stringify(input),
);
