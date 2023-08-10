import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_assertEquals_ArraySimplePointer =
    _test_assertEquals<ArraySimplePointer>(ArraySimplePointer)(
        typia.createAssertEquals<ArraySimplePointer>(),
    );
