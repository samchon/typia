import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TagArrayUnion } from "../../structures/TagArrayUnion";

export const test_misc_validatePrune_TagArrayUnion = _test_misc_validatePrune(
    "TagArrayUnion",
)<TagArrayUnion>(TagArrayUnion)((input) =>
    typia.misc.validatePrune<TagArrayUnion>(input),
);
