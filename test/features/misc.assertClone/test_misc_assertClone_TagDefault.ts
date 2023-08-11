import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TagDefault } from "../../structures/TagDefault";

export const test_misc_assertClone_TagDefault =
    _test_misc_assertClone<TagDefault>(TagDefault)((input) =>
        typia.misc.assertClone<TagDefault>(input),
    );
