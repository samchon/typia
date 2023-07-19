import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_validateEquals_ArrayHierarchical =
    _test_validateEquals<ArrayHierarchical>(ArrayHierarchical)((input) =>
        typia.validateEquals(input),
    );
