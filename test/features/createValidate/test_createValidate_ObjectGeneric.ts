import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_validate_ObjectGeneric = _test_validate(
    "ObjectGeneric",
)<ObjectGeneric>(ObjectGeneric)(typia.createValidate<ObjectGeneric>());
