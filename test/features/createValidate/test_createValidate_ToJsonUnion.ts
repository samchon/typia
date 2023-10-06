import typia from "../../../src";

import { _test_validate } from "../../internal/_test_validate";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_createValidate_ToJsonUnion = _test_validate(
    "ToJsonUnion",
)<ToJsonUnion>(
    ToJsonUnion
)(typia.createValidate<ToJsonUnion>());
