import typia from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectGeneric = _test_validate(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createValidate<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);
