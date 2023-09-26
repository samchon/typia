import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_createEquals_ObjectHttpTypeTag = _test_equals(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)(
    typia.createEquals<ObjectHttpTypeTag>(),
);
