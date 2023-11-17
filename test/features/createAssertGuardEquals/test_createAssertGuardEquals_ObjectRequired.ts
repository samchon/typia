import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_createAssertGuardEquals_ObjectRequired =
  _test_assertGuardEquals("ObjectRequired")<ObjectRequired>(ObjectRequired)(
    typia.createAssertGuardEquals<ObjectRequired>(),
  );
