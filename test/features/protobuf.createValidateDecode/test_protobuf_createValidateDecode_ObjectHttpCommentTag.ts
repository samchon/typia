import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_protobuf_createValidateDecode_ObjectHttpCommentTag =
  _test_protobuf_validateDecode("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag,
  )({
    decode: typia.protobuf.createValidateDecode<ObjectHttpCommentTag>(),
    encode: typia.protobuf.createEncode<ObjectHttpCommentTag>(),
  });
