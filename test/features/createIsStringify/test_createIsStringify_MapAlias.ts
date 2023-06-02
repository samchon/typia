import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { MapAlias } from "../../structures/MapAlias";

export const test_createIsStringify_MapAlias = _test_isStringify(
    "MapAlias",
    MapAlias.generate,
    typia.createIsStringify<MapAlias>(),
    MapAlias.SPOILERS,
);
