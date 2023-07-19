import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_protobuf_message_ArrayRecursiveUnionImplicit =
    _test_protobuf_message("ArrayRecursiveUnionImplicit")(
        typia.protobuf.message<ArrayRecursiveUnionImplicit>(),
    );
