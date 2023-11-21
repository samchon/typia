import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_misc_createValidateClone_TypeTagArray =
  _test_misc_validateClone("TypeTagArray")<TypeTagArray>(TypeTagArray)(
    typia.misc.createValidateClone<TypeTagArray>(),
  );
