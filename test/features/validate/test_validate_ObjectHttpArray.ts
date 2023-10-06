import typia from "../../../src";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_validate_ObjectHttpArray = _test_validate(
    "ObjectHttpArray",
)<ObjectHttpArray>(
    ObjectHttpArray
)((input) => typia.validate<ObjectHttpArray>(input));
