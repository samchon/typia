import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TagArrayUnion } from "../../structures/TagArrayUnion";

export const test_misc_validateClone_TagArrayUnion = _test_misc_validateClone(
    "TagArrayUnion",
)<TagArrayUnion>(TagArrayUnion)(
    typia.misc.createValidateClone<TagArrayUnion>(),
);
