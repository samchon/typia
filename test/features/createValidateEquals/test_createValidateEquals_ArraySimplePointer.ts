import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_validateEquals_ArraySimplePointer =
    _test_validateEquals<ArraySimplePointer>(ArraySimplePointer)(
        typia.createValidateEquals<ArraySimplePointer>(),
    );
