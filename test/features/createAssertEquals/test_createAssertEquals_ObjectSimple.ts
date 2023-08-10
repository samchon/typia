import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_assertEquals_ObjectSimple = _test_assertEquals<ObjectSimple>(
    ObjectSimple,
)(typia.createAssertEquals<ObjectSimple>());
