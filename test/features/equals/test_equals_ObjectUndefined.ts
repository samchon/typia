import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_equals_ObjectUndefined = _test_equals(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.equals(input),
);
