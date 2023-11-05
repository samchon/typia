import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_validate_DynamicTag = _test_validate(
    "DynamicTag",
)<DynamicTag>(DynamicTag)((input) => typia.validate<DynamicTag>(input));
