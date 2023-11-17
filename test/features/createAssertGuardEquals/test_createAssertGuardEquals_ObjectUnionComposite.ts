import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createAssertGuardEquals_ObjectUnionComposite =
  _test_assertGuardEquals("ObjectUnionComposite")<ObjectUnionComposite>(
    ObjectUnionComposite,
  )(typia.createAssertGuardEquals<ObjectUnionComposite>());
