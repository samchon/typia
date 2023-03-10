import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_createValidate_ObjectAlias = _test_validate(
    "ObjectAlias",
    ObjectAlias.generate,
    typia.createValidate<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
