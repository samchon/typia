import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_validate_ObjectUnionDouble = _test_validate(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(ObjectUnionDouble)(
    typia.createValidate<ObjectUnionDouble>(),
);
