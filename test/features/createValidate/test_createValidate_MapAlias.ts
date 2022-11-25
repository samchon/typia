import TSON from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_MapAlias = _test_validate(
    "MapAlias",
    MapAlias.generate,
    TSON.createValidate<MapAlias>(),
    MapAlias.SPOILERS,
);
