import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_validate_ArrayHierarchical =
    _test_validate<ArrayHierarchical>(ArrayHierarchical)((input) =>
        typia.validate(input),
    );
