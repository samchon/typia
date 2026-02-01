import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { MapUnion } from "../../structures/MapUnion";

export const test_validate_MapUnion = (): void => _test_validate(
    "MapUnion",
)<MapUnion>(
    MapUnion
)((input) => typia.validate<MapUnion>(input));
