import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_stringify_ObjectUndefined = _test_stringify(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.stringify<ObjectUndefined>(input),
);
