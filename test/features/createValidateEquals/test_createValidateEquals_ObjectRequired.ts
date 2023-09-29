import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_createValidateEquals_ObjectRequired = _test_validateEquals(
    "ObjectRequired",
)<ObjectRequired>(ObjectRequired)(typia.createValidateEquals<ObjectRequired>());
