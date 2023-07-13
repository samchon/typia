import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_validateEquals_ObjectUndefined = _test_validateEquals(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.createValidateEquals<ObjectUndefined>(),
);
