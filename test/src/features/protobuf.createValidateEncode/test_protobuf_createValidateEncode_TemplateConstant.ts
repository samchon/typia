import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_protobuf_createValidateEncode_TemplateConstant = (): void =>
  _test_protobuf_validateEncode("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )({
    encode: typia.protobuf.createValidateEncode<TemplateConstant>(),
    decode: typia.protobuf.createDecode<TemplateConstant>(),
    message: typia.protobuf.message<TemplateConstant>(),
  });
