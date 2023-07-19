import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_protobuf_message_ArrayRecursiveUnionExplicit =
    _test_protobuf_message("ArrayRecursiveUnionExplicit")(
        typia.protobuf.message<ArrayRecursiveUnionExplicit>(),
    );
