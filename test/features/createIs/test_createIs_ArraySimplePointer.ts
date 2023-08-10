import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_is_ArraySimplePointer = _test_is<ArraySimplePointer>(
    ArraySimplePointer,
)(typia.createIs<ArraySimplePointer>());
