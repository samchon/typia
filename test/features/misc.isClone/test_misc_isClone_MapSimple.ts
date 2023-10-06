import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { MapSimple } from "../../structures/MapSimple";

export const test_misc_isClone_MapSimple = _test_misc_isClone(
    "MapSimple",
)<MapSimple>(MapSimple)((input) => typia.misc.isClone<MapSimple>(input));
