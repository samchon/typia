import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TagLength } from "../../structures/TagLength";

export const test_misc_assertClone_TagLength =
    _test_misc_assertClone<TagLength>(TagLength)((input) =>
        typia.misc.assertClone(input),
    );
