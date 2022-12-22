import typia from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_message } from "../internal/_test_message";

export const test_message_ArrayRecursiveUnionImplicit = _test_message(
    "ArrayRecursiveUnionImplicit",
    typia.message<ArrayRecursiveUnionImplicit>(),
);