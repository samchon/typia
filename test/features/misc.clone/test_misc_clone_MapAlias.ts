import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { MapAlias } from "../../structures/MapAlias";

export const test_misc_clone_MapAlias = _test_misc_clone("MapAlias")<MapAlias>(
    MapAlias,
)((input) => typia.misc.clone<MapAlias>(input));
