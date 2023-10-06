import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_createValidate_ObjectHttpTypeTag = _test_validate(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)(
    typia.createValidate<ObjectHttpTypeTag>(),
);
