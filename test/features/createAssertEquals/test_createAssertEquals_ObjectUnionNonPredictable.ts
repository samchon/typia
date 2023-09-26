import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_createAssertEquals_ObjectUnionNonPredictable =
    _test_assertEquals("ObjectUnionNonPredictable")<ObjectUnionNonPredictable>(
        ObjectUnionNonPredictable,
    )(typia.createAssertEquals<ObjectUnionNonPredictable>());
