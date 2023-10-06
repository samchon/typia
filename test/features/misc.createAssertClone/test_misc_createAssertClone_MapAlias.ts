import typia from "../../../src";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { MapAlias } from "../../structures/MapAlias";

export const test_misc_createAssertClone_MapAlias = _test_misc_assertClone(
    "MapAlias",
)<MapAlias>(
    MapAlias
)(typia.misc.createAssertClone<MapAlias>());
