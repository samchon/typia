import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { MapSimple } from "../../structures/MapSimple";

export const test_misc_createClone_MapSimple = _test_misc_clone(
    "MapSimple",
)<MapSimple>(MapSimple)(typia.misc.createClone<MapSimple>());
