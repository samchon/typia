import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ObjectOptional = _test_isClone(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => TSON.isClone(input),
    ObjectOptional.SPOILERS,
);