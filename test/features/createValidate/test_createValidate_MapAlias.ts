import typia from "typia";

import { MapAlias } from "../../structures/MapAlias";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_MapAlias = _test_validate(
    "MapAlias",
    MapAlias.generate,
    typia.createValidate<MapAlias>(),
    MapAlias.SPOILERS,
);
