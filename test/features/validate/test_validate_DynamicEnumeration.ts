import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_validate_DynamicEnumeration =
    _test_validate<DynamicEnumeration>(DynamicEnumeration)((input) =>
        typia.validate<DynamicEnumeration>(input),
    );
