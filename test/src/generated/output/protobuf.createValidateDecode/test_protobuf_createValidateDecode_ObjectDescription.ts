import typia from "typia";

import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_protobuf_createValidateDecode_ObjectDescription =
  _test_protobuf_validateDecode("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )({
    decode: (
      input: Uint8Array,
    ): typia.IValidation<typia.Resolved<ObjectDescription>> => {
      const validate = (input: any): typia.IValidation<ObjectDescription> => {
        const errors = [] as any[];
        const __is = (input: any): input is ObjectDescription => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
              input.id,
            ) &&
            "boolean" === typeof input.deprecated &&
            "string" === typeof input.title &&
            Array.isArray(input.descriptions) &&
            input.descriptions.every((elem: any) => "string" === typeof elem) &&
            "number" === typeof input.newLine &&
            Number.isFinite(input.newLine);
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input)) {
          const $report = (typia.protobuf.createValidateDecode as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectDescription => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("string" === typeof input.id &&
                  (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                    input.id,
                  ) ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: 'string & Format<"uuid">',
                      value: input.id,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".id",
                    expected: '(string & Format<"uuid">)',
                    value: input.id,
                  }),
                "boolean" === typeof input.deprecated ||
                  $report(_exceptionable, {
                    path: _path + ".deprecated",
                    expected: "boolean",
                    value: input.deprecated,
                  }),
                "string" === typeof input.title ||
                  $report(_exceptionable, {
                    path: _path + ".title",
                    expected: "string",
                    value: input.title,
                  }),
                ((Array.isArray(input.descriptions) ||
                  $report(_exceptionable, {
                    path: _path + ".descriptions",
                    expected: "Array<string>",
                    value: input.descriptions,
                  })) &&
                  input.descriptions
                    .map(
                      (elem: any, _index1: number) =>
                        "string" === typeof elem ||
                        $report(_exceptionable, {
                          path: _path + ".descriptions[" + _index1 + "]",
                          expected: "string",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".descriptions",
                    expected: "Array<string>",
                    value: input.descriptions,
                  }),
                ("number" === typeof input.newLine &&
                  Number.isFinite(input.newLine)) ||
                  $report(_exceptionable, {
                    path: _path + ".newLine",
                    expected: "number",
                    value: input.newLine,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectDescription",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectDescription",
                value: input,
              })
            );
          })(input, "$input", true);
        }
        const success = 0 === errors.length;
        return {
          success,
          errors,
          data: success ? input : undefined,
        } as any;
      };
      const decode = (
        input: Uint8Array,
      ): import("typia").Resolved<ObjectDescription> => {
        const $Reader = (typia.protobuf.createValidateDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {
            id: "" as any,
            deprecated: undefined as any,
            title: "" as any,
            descriptions: [] as any,
            newLine: undefined as any,
          } as any;
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // string;
                output.id = reader.string();
                break;
              case 2:
                // bool;
                output.deprecated = reader.bool();
                break;
              case 3:
                // string;
                output.title = reader.string();
                break;
              case 4:
                // type: Array<string>;
                output.descriptions.push(reader.string());
                break;
              case 5:
                // double;
                output.newLine = reader.double();
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
      return validate(output) as any;
    },
    encode: (input: ObjectDescription): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "id";
          writer.uint32(10);
          writer.string(input.id);
          // property "deprecated";
          writer.uint32(16);
          writer.bool(input.deprecated);
          // property "title";
          writer.uint32(26);
          writer.string(input.title);
          // property "descriptions";
          if (0 !== input.descriptions.length) {
            for (const elem of input.descriptions) {
              writer.uint32(34);
              writer.string(elem);
            }
          }
          // property "newLine";
          writer.uint32(41);
          writer.double(input.newLine);
        };
        //ObjectDescription;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
