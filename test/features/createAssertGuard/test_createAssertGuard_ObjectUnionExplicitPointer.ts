import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_createAssertGuard_ObjectUnionExplicitPointer =
  _test_assertGuard("ObjectUnionExplicitPointer")<ObjectUnionExplicitPointer>(
    ObjectUnionExplicitPointer,
  )(typia.createAssertGuard<ObjectUnionExplicitPointer>());
