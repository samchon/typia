import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_assertGuardEquals_ObjectUnionExplicitPointer =
    _test_assertGuardEquals(
        "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)((input) =>
        typia.assertGuardEquals<ObjectUnionExplicitPointer>(input),
    );
