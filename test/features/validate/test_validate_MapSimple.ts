import typia from "../../../src";

import { MapSimple } from "../../structures/MapSimple";
import { _test_validate } from "../../internal/_test_validate";

export const test_validate_MapSimple = _test_validate(
    "MapSimple",
    MapSimple.generate,
    (input) => typia.validate(input),
    MapSimple.SPOILERS,
);
