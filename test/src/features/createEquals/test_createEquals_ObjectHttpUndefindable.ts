import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_createEquals_ObjectHttpUndefindable = (): void => _test_equals(
    "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(
    ObjectHttpUndefindable
)(typia.createEquals<ObjectHttpUndefindable>());
