import typia from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ObjectUndefined = _test_validateEquals(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.validateEquals(input),
);
