import typia from "../../../src";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_createValidateEquals_ObjectHttpUndefindable = _test_validateEquals(
    "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(
    ObjectHttpUndefindable
)(typia.createValidateEquals<ObjectHttpUndefindable>());
