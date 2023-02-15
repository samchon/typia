import typia from "typia";

import { MapUnion } from "../../structures/MapUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_MapUnion = _test_validate(
    "MapUnion",
    MapUnion.generate,
    typia.createValidate<MapUnion>(),
    MapUnion.SPOILERS,
);
