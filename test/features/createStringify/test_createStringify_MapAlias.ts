import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { MapAlias } from "../../structures/MapAlias";

export const test_createStringify_MapAlias = _test_stringify(
    "MapAlias",
    MapAlias.generate,
    typia.createStringify<MapAlias>(),
);
