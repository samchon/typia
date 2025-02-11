import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_createValidate_ObjectHttpUndefindable = _test_validate(
    "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(
    ObjectHttpUndefindable
)(typia.createValidate<ObjectHttpUndefindable>());
