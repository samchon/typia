import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_misc_validateClone_TypeTagFormat = _test_misc_validateClone(
  "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)((input) =>
  typia.misc.validateClone<TypeTagFormat>(input),
);
