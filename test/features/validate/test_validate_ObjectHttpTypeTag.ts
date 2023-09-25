import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_validate_ObjectHttpTypeTag = _test_validate(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)((input) =>
    typia.validate<ObjectHttpTypeTag>(input),
);
