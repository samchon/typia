import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_clone_ObjectOptional = _test_clone(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.clone<ObjectOptional>(input),
);
