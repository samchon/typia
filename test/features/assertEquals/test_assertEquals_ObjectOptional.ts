import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_assertEquals_ObjectOptional = _test_assertEquals(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.assertEquals(input),
);
