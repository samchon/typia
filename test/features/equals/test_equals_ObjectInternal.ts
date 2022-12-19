import typia from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ObjectInternal = _test_equals(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => typia.equals(input),
);