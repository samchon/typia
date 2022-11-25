import TSON from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_create_validate_equals_map_alias = _test_validate_equals(
    "aliased map",
    MapAlias.generate,
    TSON.createValidateEquals<MapAlias>(),
    false,
);
