import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { MapAlias } from "../../structures/MapAlias";

export const test_standardSchema_createValidate_MapAlias = (): void => _test_standardSchema_validate(
    "MapAlias",
)<MapAlias>(
    MapAlias
)(typia.createValidate<MapAlias>());
