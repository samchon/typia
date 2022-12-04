import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ObjectInternal = _test_validateClone(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => TSON.validateClone(input),
    ObjectInternal.SPOILERS,
);
