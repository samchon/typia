import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { MapAlias } from "../../structures/MapAlias";

export const test_validate_MapAlias = _test_validate(
    "MapAlias",
    MapAlias.generate,
    typia.createValidate<MapAlias>(),
    MapAlias.SPOILERS,
);
