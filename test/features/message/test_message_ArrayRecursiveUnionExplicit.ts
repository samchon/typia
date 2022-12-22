import typia from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_message } from "../internal/_test_message";

export const test_message_ArrayRecursiveUnionExplicit = _test_message(
    "ArrayRecursiveUnionExplicit",
    typia.message<ArrayRecursiveUnionExplicit>(),
);