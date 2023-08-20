import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { MapUnion } from "../../structures/MapUnion";

export const test_clone_MapUnion = _test_clone(
    "MapUnion",
    MapUnion.generate,
    (input) => typia.clone<MapUnion>(input),
);
