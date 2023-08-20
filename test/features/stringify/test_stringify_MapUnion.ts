import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { MapUnion } from "../../structures/MapUnion";

export const test_stringify_MapUnion = _test_stringify(
    "MapUnion",
    MapUnion.generate,
    (input) => typia.stringify<MapUnion>(input),
);
