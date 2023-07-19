import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TagCustom } from "../../structures/TagCustom";

export const test_misc_validateClone_TagCustom =
    _test_misc_validateClone<TagCustom>(TagCustom)((input) =>
        typia.misc.validateClone(input),
    );
