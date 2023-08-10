import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_assert_ObjectUnionExplicitPointer =
    _test_assert<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)(
        typia.createAssert<ObjectUnionExplicitPointer>(),
    );
