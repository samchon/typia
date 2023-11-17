import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_assertGuardEquals_ObjectUnionCompositePointer =
    _test_assertGuardEquals(
        "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)((input) =>
        typia.assertGuardEquals<ObjectUnionCompositePointer>(input),
    );
