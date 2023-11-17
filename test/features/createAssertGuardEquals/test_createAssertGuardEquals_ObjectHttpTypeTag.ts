import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_createAssertGuardEquals_ObjectHttpTypeTag =
    _test_assertGuardEquals("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
        ObjectHttpTypeTag,
    )(typia.createAssertGuardEquals<ObjectHttpTypeTag>());
