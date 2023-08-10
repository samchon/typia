import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TagType } from "../../structures/TagType";

export const test_misc_validateClone_TagType =
    _test_misc_validateClone<TagType>(TagType)((input) =>
        typia.misc.validateClone<TagType>(input),
    );
