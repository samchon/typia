import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_is } from "./_test_is";

export const test_is_object_internal = _test_is(
    "object internal",
    ObjectInternal.generate,
    (input) => TSON.is(input),
    [(elem) => (elem.id = false as any), (elem) => (elem.name = 1 as any)],
);
