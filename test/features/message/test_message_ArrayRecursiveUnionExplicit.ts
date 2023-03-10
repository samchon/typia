import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_message_ArrayRecursiveUnionExplicit = _test_message(
    "ArrayRecursiveUnionExplicit",
    typia.message<ArrayRecursiveUnionExplicit>(),
);
