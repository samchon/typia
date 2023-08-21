import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_validate_ObjectJsonTag = _test_validate(
    "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)((input) =>
    typia.validate<ObjectJsonTag>(input),
);
