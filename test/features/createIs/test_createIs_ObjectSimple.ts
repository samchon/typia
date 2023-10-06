import typia from "../../../src";

import { _test_is } from "../../internal/_test_is";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_createIs_ObjectSimple = _test_is(
    "ObjectSimple",
)<ObjectSimple>(
    ObjectSimple
)(typia.createIs<ObjectSimple>());
