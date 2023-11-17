import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_misc_clone_TypeTagLength = _test_misc_clone(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)((input) =>
  typia.misc.clone<TypeTagLength>(input),
);
