import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { MapUnion } from "../../structures/MapUnion";

export const test_misc_validateClone_MapUnion = _test_misc_validateClone(
    "MapUnion",
)<MapUnion>(MapUnion)((input) => typia.misc.validateClone<MapUnion>(input));
