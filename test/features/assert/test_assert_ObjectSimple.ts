import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_assert_ObjectSimple = _test_assert(
    "ObjectSimple",
)<ObjectSimple>(ObjectSimple)((input) => typia.assert<ObjectSimple>(input));
