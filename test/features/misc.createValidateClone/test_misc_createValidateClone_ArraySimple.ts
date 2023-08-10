import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_misc_validateClone_ArraySimple =
    _test_misc_validateClone<ArraySimple>(ArraySimple)(
        typia.misc.createValidateClone<ArraySimple>(),
    );
