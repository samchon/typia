import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_stringify_ObjectInternal = _test_stringify(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => typia.stringify(input),
);
