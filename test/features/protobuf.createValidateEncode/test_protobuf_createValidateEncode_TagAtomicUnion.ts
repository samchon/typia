import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_protobuf_validateEncode_TagAtomicUnion =
    _test_protobuf_validateEncode("TagAtomicUnion")<TagAtomicUnion>(
        TagAtomicUnion,
    )({
        validateEncode: typia.protobuf.createValidateEncode<TagAtomicUnion>(),
        message: typia.protobuf.message<TagAtomicUnion>(),
    });
