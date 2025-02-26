import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { MapUnion } from "../../structures/MapUnion";

export const test_standardSchema_createValidate_MapUnion = _test_standardSchema_validate(
    "MapUnion",
)<MapUnion>(
    MapUnion
)(typia.createValidate<MapUnion>());
