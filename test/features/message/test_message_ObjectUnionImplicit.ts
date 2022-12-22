import typia from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectUnionImplicit = _test_message(
    "ObjectUnionImplicit",
    typia.message<ObjectUnionImplicit>(),
);