import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_validateEquals_ObjectTuple = _test_validateEquals(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => typia.validateEquals(input),
);
