import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { MapSimple } from "../../structures/MapSimple";

export const test_standardSchema_createValidate_MapSimple = _test_standardSchema_validate(
    "MapSimple",
)<MapSimple>(
    MapSimple
)(typia.createValidate<MapSimple>());
