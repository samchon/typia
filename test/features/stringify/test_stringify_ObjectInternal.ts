import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ObjectInternal = _test_stringify(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => TSON.stringify(input),
);