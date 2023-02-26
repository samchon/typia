import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { MapSimple } from "../../structures/MapSimple";

export const test_createStringify_MapSimple = _test_stringify(
    "MapSimple",
    MapSimple.generate,
    typia.createStringify<MapSimple>(),
);
