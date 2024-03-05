import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_protobuf_createAssertEncode_ObjectDescription =
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectDescription",
  )<ObjectDescription>(ObjectDescription)({
    encode: (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): Uint8Array => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ObjectDescription => {
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
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectDescription => {
            const $guard = (typia.protobuf.createAssertEncode as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (("string" === typeof input.id &&
                (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                  input.id,
                ) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".id",
                      expected: 'string & Format<"uuid">',
                      value: input.id,
                    },
                    errorFactory,
                  ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".id",
                    expected: '(string & Format<"uuid">)',
                    value: input.id,
                  },
                  errorFactory,
                )) &&
              ("boolean" === typeof input.deprecated ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".deprecated",
                    expected: "boolean",
                    value: input.deprecated,
                  },
                  errorFactory,
                )) &&
              ("string" === typeof input.title ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".title",
                    expected: "string",
                    value: input.title,
                  },
                  errorFactory,
                )) &&
              (((Array.isArray(input.descriptions) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".descriptions",
                    expected: "Array<string>",
                    value: input.descriptions,
                  },
                  errorFactory,
                )) &&
                input.descriptions.every(
                  (elem: any, _index1: number) =>
                    "string" === typeof elem ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".descriptions[" + _index1 + "]",
                        expected: "string",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".descriptions",
                    expected: "Array<string>",
                    value: input.descriptions,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.newLine &&
                Number.isFinite(input.newLine)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".newLine",
                    expected: "number",
                    value: input.newLine,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectDescription",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectDescription",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const encode = (input: ObjectDescription): Uint8Array => {
        const $Sizer = (typia.protobuf.createAssertEncode as any).Sizer;
        const $Writer = (typia.protobuf.createAssertEncode as any).Writer;
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
      };
      return encode(assert(input, errorFactory));
    },
    decode: (
      input: Uint8Array,
    ): import("typia").Resolved<ObjectDescription> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
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
    },
    message:
      'syntax = "proto3";\n\nmessage ObjectDescription {\n  required string id = 1;\n  required bool deprecated = 2;\n  required string title = 3;\n  repeated string descriptions = 4;\n  required double newLine = 5;\n}',
  });
