import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_misc_createAssertClone_TypeTagPattern =
  _test_misc_assertClone("TypeTagPattern")<TypeTagPattern>(TypeTagPattern)(
    typia.misc.createAssertClone<TypeTagPattern>(),
  );
