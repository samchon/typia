import typia from "../../../src";
import { MapUnion } from "../../structures/MapUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_MapUnion = _test_validate(
    "MapUnion",
    MapUnion.generate,
    (input) => typia.validate(input),
    MapUnion.SPOILERS,
);
