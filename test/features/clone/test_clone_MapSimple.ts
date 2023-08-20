import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { MapSimple } from "../../structures/MapSimple";

export const test_clone_MapSimple = _test_clone(
    "MapSimple",
    MapSimple.generate,
    (input) => typia.clone<MapSimple>(input),
);
