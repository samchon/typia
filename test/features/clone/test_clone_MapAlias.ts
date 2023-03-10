import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { MapAlias } from "../../structures/MapAlias";

export const test_clone_MapAlias = _test_clone(
    "MapAlias",
    MapAlias.generate,
    (input) => typia.clone(input),
);
