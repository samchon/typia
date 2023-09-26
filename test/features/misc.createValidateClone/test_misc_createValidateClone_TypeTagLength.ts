import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_misc_createValidateClone_TypeTagLength =
    _test_misc_validateClone("TypeTagLength")<TypeTagLength>(TypeTagLength)(
        typia.misc.createValidateClone<TypeTagLength>(),
    );
