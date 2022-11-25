import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectGenericAlias = _test_validate(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    TSON.createValidate<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);