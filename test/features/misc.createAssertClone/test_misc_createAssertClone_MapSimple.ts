import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { MapSimple } from "../../structures/MapSimple";

export const test_misc_createAssertClone_MapSimple = _test_misc_assertClone(
    "MapSimple",
)<MapSimple>(MapSimple)(typia.misc.createAssertClone<MapSimple>());
