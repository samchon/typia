import { $ProtobufReader } from "../$ProtobufReader";
import { $ProtobufSizer } from "../$ProtobufSizer";
import { $ProtobufWriter } from "../$ProtobufWriter";
import { $strlen } from "../$strlen";
import { $throws } from "../$throws";
import { is } from "../is";

export const decode = (method: string) => ({
  ...is(),
  Reader: $ProtobufReader,
  throws: $throws(`protobuf.${method}`),
});

export const encode = (method: string) => ({
  ...is(),
  Sizer: $ProtobufSizer,
  Writer: $ProtobufWriter,
  strlen: $strlen,
  throws: $throws(method),
});