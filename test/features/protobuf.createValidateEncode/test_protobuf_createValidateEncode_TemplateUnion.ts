import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_createValidateEncode_TemplateUnion =
  _test_protobuf_validateEncode("TemplateUnion")<TemplateUnion>(TemplateUnion)({
    encode: typia.protobuf.createValidateEncode<TemplateUnion>(),
    decode: typia.protobuf.createDecode<TemplateUnion>(),
    message: typia.protobuf.message<TemplateUnion>(),
  });
