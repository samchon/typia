import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_validateEquals_ObjectJsonTag = _test_validateEquals(
    "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)((input) =>
    typia.validateEquals<ObjectJsonTag>(input),
);
