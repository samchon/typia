import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_protobuf_decode_TemplateConstant = (): void =>
  _test_protobuf_decode("TemplateConstant")<TemplateConstant>(TemplateConstant)(
    {
      decode: (input) => typia.protobuf.decode<TemplateConstant>(input),
      encode: typia.protobuf.createEncode<TemplateConstant>(),
    },
  );
