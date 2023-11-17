import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_misc_createValidateClone_TypeTagDefault =
  _test_misc_validateClone("TypeTagDefault")<TypeTagDefault>(TypeTagDefault)(
    typia.misc.createValidateClone<TypeTagDefault>(),
  );
