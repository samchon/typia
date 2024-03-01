import typia from "typia";

import { _test_protobuf_isDecode } from "../../../internal/_test_protobuf_isDecode";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_protobuf_isDecode_TypeTagCustom = _test_protobuf_isDecode(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)({
  decode: (input) =>
    ((input: Uint8Array): typia.Resolved<TypeTagCustom> | null => {
      const is = (input: any): input is TypeTagCustom => {
        return (
          "object" === typeof input &&
          null !== input &&
          "string" === typeof (input as any).id &&
          /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
            (input as any).id,
          ) &&
          "string" === typeof (input as any).dollar &&
          (input as any).dollar[0] === "$" &&
          !isNaN(
            Number((input as any).dollar.substring(1).split(",").join("")),
          ) &&
          "string" === typeof (input as any).postfix &&
          (input as any).postfix.endsWith("abcd") &&
          "number" === typeof (input as any).powerOf &&
          Number.isFinite((input as any).powerOf) &&
          (() => {
            const denominator: number = Math.log(2);
            const value: number =
              Math.log((input as any).powerOf) / denominator;
            return Math.abs(value - Math.round(value)) < 1e-8;
          })()
        );
      };
      const decode = (input: Uint8Array): typia.Resolved<TypeTagCustom> => {
        const $Reader = (typia.protobuf.isDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {
            id: "" as any,
            dollar: "" as any,
            postfix: "" as any,
            powerOf: undefined as any,
          } as any;
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // string;
                output.id = reader.string();
                break;
              case 2:
                // string;
                output.dollar = reader.string();
                break;
              case 3:
                // string;
                output.postfix = reader.string();
                break;
              case 4:
                // double;
                output.powerOf = reader.double();
                break;
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return output;
        };
        const reader = new $Reader(input);
        return $pdo0(reader);
      };
      const output = decode(input);
      if (!is(output)) return null;
      return output;
    })(input),
  encode: (input: TypeTagCustom): Uint8Array => {
    const $Sizer = (typia.protobuf.createEncode as any).Sizer;
    const $Writer = (typia.protobuf.createEncode as any).Writer;
    const encoder = (writer: any): any => {
      const $peo0 = (input: any): any => {
        // property "id";
        writer.uint32(10);
        writer.string(input.id);
        // property "dollar";
        writer.uint32(18);
        writer.string(input.dollar);
        // property "postfix";
        writer.uint32(26);
        writer.string(input.postfix);
        // property "powerOf";
        writer.uint32(33);
        writer.double(input.powerOf);
      };
      //TypeTagCustom;
      $peo0(input);
      return writer;
    };
    const sizer = encoder(new $Sizer());
    const writer = encoder(new $Writer(sizer));
    return writer.buffer();
  },
});
