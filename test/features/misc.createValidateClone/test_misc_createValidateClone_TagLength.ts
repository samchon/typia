import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TagLength } from "../../structures/TagLength";

export const test_misc_validateClone_TagLength =
    _test_misc_validateClone<TagLength>(TagLength)(
        typia.misc.createValidateClone<TagLength>(),
    );
