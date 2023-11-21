import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_misc_clone_TypeTagDefault = _test_misc_clone(
  "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)((input) =>
  typia.misc.clone<TypeTagDefault>(input),
);
