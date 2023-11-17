import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_createAssertGuardEquals_TypeTagTuple =
  _test_assertGuardEquals("TypeTagTuple")<TypeTagTuple>(TypeTagTuple)(
    typia.createAssertGuardEquals<TypeTagTuple>(),
  );
