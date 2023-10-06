import typia from "../../../src";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_createValidate_ObjectPartial = _test_validate(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)(typia.createValidate<ObjectPartial>());
