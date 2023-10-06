import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_misc_createValidateClone_TypeTagRange =
    _test_misc_validateClone("TypeTagRange")<TypeTagRange>(TypeTagRange)(
        typia.misc.createValidateClone<TypeTagRange>(),
    );
