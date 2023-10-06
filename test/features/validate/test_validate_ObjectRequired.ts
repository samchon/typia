import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_validate_ObjectRequired = _test_validate(
    "ObjectRequired",
)<ObjectRequired>(ObjectRequired)((input) =>
    typia.validate<ObjectRequired>(input),
);
