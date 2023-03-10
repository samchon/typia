import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_message_ArrayRecursiveUnionImplicit = _test_message(
    "ArrayRecursiveUnionImplicit",
    typia.message<ArrayRecursiveUnionImplicit>(),
);
