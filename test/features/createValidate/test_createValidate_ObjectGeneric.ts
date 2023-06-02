import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_createValidate_ObjectGeneric = _test_validate(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createValidate<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);
