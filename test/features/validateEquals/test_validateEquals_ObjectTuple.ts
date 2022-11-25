import TSON from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ObjectTuple = _test_validateEquals(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => TSON.validateEquals(input),
);