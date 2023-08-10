import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TagArrayUnion } from "../../structures/TagArrayUnion";

export const test_misc_isClone_TagArrayUnion =
    _test_misc_isClone<TagArrayUnion>(TagArrayUnion)((input) =>
        typia.misc.isClone<TagArrayUnion>(input),
    );
