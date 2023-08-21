import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TagArrayUnion } from "../../structures/TagArrayUnion";

export const test_misc_clone_TagArrayUnion = _test_misc_clone(
    "TagArrayUnion",
)<TagArrayUnion>(TagArrayUnion)((input) =>
    typia.misc.clone<TagArrayUnion>(input),
);
