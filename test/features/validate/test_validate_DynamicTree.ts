import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_validate_DynamicTree = _test_validate(
    "DynamicTree",
)<DynamicTree>(DynamicTree)((input) => typia.validate<DynamicTree>(input));
