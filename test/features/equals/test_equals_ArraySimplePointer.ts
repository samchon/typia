import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_equals_ArraySimplePointer = _test_equals<ArraySimplePointer>(
    ArraySimplePointer,
)((input) => typia.equals(input));
