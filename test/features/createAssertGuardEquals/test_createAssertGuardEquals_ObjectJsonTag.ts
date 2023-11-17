import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_createAssertGuardEquals_ObjectJsonTag =
    _test_assertGuardEquals("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)(
        typia.createAssertGuardEquals<ObjectJsonTag>(),
    );
