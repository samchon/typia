import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_misc_createClone_UltimateUnion = _test_misc_clone(
    "UltimateUnion",
)<UltimateUnion>(UltimateUnion)(typia.misc.createClone<UltimateUnion>());
