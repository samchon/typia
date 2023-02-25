import typia from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ObjectUndefined = _test_stringify(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.stringify(input),
);
