import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_stringify_ObjectSimple = _test_stringify(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.stringify<ObjectSimple>(input),
);
