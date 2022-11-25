import TSON from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_MapAlias = _test_validate(
    "MapAlias",
    MapAlias.generate,
    (input) => TSON.validate(input),
    MapAlias.SPOILERS,
);
