import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ArraySimplePointer } from "../../structures/ArraySimplePointer";

export const test_validate_ArraySimplePointer =
    _test_validate<ArraySimplePointer>(ArraySimplePointer)((input) =>
        typia.validate<ArraySimplePointer>(input),
    );
