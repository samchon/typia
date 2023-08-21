import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TagArrayUnion } from "../../structures/TagArrayUnion";

export const test_misc_isPrune_TagArrayUnion = _test_misc_isPrune(
    "TagArrayUnion",
)<TagArrayUnion>(TagArrayUnion)((input) =>
    typia.misc.isPrune<TagArrayUnion>(input),
);
