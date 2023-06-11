import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { MapSimple } from "../../structures/MapSimple";

export const test_createValidate_MapSimple = _test_validate(
    "MapSimple",
    MapSimple.generate,
    typia.createValidate<MapSimple>(),
    MapSimple.SPOILERS,
);
