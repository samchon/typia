import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { MapAlias } from "../../structures/MapAlias";

export const test_stringify_MapAlias = _test_stringify(
    "MapAlias",
    MapAlias.generate,
    (input) => typia.stringify(input),
);
