import TSON from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_map_alias = _test_validate(
    "aliased map",
    MapAlias.generate,
    (input) => TSON.validate(input),
    MapAlias.SPOILERS,
);
