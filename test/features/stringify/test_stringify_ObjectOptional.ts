import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_stringify_ObjectOptional = _test_stringify(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.stringify(input),
);
