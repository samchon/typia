import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_message_ObjectUnionExplicit = _test_message(
    "ObjectUnionExplicit",
    typia.message<ObjectUnionExplicit>(),
);
