import typia from "../../../src";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { MapAlias } from "../../structures/MapAlias";

export const test_misc_createIsClone_MapAlias = _test_misc_isClone(
    "MapAlias",
)<MapAlias>(
    MapAlias
)(typia.misc.createIsClone<MapAlias>());
