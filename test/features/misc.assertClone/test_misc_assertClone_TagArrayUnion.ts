import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TagArrayUnion } from "../../structures/TagArrayUnion";

export const test_misc_assertClone_TagArrayUnion = _test_misc_assertClone(
    "TagArrayUnion",
)<TagArrayUnion>(TagArrayUnion)((input) =>
    typia.misc.assertClone<TagArrayUnion>(input),
);
