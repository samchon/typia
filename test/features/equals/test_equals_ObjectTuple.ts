import typia from "../../../src";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_equals_ObjectTuple = _test_equals(
    "ObjectTuple",
)<ObjectTuple>(
    ObjectTuple
)((input) => typia.equals<ObjectTuple>(input));
