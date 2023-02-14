import typia from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ObjectOptional = _test_clone(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.clone(input),
);