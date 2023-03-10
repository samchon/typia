import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_message_ObjectUnionImplicit = _test_message(
    "ObjectUnionImplicit",
    typia.message<ObjectUnionImplicit>(),
);
