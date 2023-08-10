import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_assert_ArraySimplePointer = _test_assert<ArraySimplePointer>(
    ArraySimplePointer,
)(typia.createAssert<ArraySimplePointer>());
