import typia from "../../../src";
import { MapSimple } from "../../structures/MapSimple";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_MapSimple = _test_validate(
    "MapSimple",
    MapSimple.generate,
    typia.createValidate<MapSimple>(),
    MapSimple.SPOILERS,
);