import typia from "../../../src";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { MapAlias } from "../../structures/MapAlias";

export const test_misc_createValidateClone_MapAlias = _test_misc_validateClone(
    "MapAlias",
)<MapAlias>(
    MapAlias
)(typia.misc.createValidateClone<MapAlias>());
