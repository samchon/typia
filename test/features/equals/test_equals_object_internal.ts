import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_equals } from "./_test_equals";

export const test_equals_object_internal = _test_equals(
    "object internal",
    ObjectInternal.generate,
    (input) => TSON.equals(input),
);
