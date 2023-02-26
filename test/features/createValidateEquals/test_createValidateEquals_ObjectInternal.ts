import typia from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ObjectInternal = _test_validateEquals(
    "ObjectInternal",
    ObjectInternal.generate,
    typia.createValidateEquals<ObjectInternal>(),
);
