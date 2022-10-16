import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_object_internal = _test_stringify(
    "object internal",
    ObjectInternal.generate(),
    (input) => TSON.stringify(input),
);
