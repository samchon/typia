import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TagFormat } from "../../structures/TagFormat";

export const test_misc_assertClone_TagFormat =
    _test_misc_assertClone<TagFormat>(TagFormat)((input) =>
        typia.misc.assertClone(input),
    );
