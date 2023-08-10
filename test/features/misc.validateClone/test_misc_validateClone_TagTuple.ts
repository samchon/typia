import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TagTuple } from "../../structures/TagTuple";

export const test_misc_validateClone_TagTuple =
    _test_misc_validateClone<TagTuple>(TagTuple)((input) =>
        typia.misc.validateClone<TagTuple>(input),
    );
