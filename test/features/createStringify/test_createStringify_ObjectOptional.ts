import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_createStringify_ObjectOptional = _test_stringify(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.createStringify<ObjectOptional>(),
);
