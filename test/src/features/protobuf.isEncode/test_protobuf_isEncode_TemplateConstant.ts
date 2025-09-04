import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_protobuf_isEncode_TemplateConstant = (): void =>
  _test_protobuf_isEncode("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )({
    encode: (input) => typia.protobuf.isEncode<TemplateConstant>(input),
    decode: typia.protobuf.createDecode<TemplateConstant>(),
    message: typia.protobuf.message<TemplateConstant>(),
  });
