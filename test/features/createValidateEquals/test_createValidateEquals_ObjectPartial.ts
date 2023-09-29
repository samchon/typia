import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_createValidateEquals_ObjectPartial = _test_validateEquals(
    "ObjectPartial",
)<ObjectPartial>(ObjectPartial)(typia.createValidateEquals<ObjectPartial>());
