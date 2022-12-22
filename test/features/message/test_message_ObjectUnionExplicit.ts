import typia from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectUnionExplicit = _test_message(
    "ObjectUnionExplicit",
    typia.message<ObjectUnionExplicit>(),
);