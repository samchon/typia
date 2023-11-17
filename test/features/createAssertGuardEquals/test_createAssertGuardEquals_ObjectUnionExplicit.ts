import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createAssertGuardEquals_ObjectUnionExplicit =
    _test_assertGuardEquals("ObjectUnionExplicit")<ObjectUnionExplicit>(
        ObjectUnionExplicit,
    )(typia.createAssertGuardEquals<ObjectUnionExplicit>());
