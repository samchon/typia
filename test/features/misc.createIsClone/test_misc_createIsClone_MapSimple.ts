import typia from "../../../src";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { MapSimple } from "../../structures/MapSimple";

export const test_misc_createIsClone_MapSimple = _test_misc_isClone(
    "MapSimple",
)<MapSimple>(
    MapSimple
)(typia.misc.createIsClone<MapSimple>());
