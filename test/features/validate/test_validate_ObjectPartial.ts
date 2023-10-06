import typia from "../../../src";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_validate_ObjectPartial = _test_validate(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)((input) => typia.validate<ObjectPartial>(input));
