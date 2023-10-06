import typia from "../../../src";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_createValidateEquals_ObjectHttpNullable = _test_validateEquals(
    "ObjectHttpNullable",
)<ObjectHttpNullable>(
    ObjectHttpNullable
)(typia.createValidateEquals<ObjectHttpNullable>());
