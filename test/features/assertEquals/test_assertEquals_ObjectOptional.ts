import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ObjectOptional = _test_assertEquals(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => TSON.assertEquals(input),
);