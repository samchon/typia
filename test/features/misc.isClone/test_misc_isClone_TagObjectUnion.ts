import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_misc_isClone_TagObjectUnion =
    _test_misc_isClone<TagObjectUnion>(TagObjectUnion)((input) =>
        typia.misc.isClone<TagObjectUnion>(input),
    );
