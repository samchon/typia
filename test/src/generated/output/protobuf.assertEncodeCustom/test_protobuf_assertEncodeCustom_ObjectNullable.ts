import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_protobuf_assertEncodeCustom_ObjectNullable =
  _test_protobuf_assertEncode(CustomGuardError)(
    "ObjectNullable",
  )<ObjectNullable>(ObjectNullable)({
    encode: (input) =>
      ((
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): Uint8Array => {
        const assert = (
          input: any,
          errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
        ): ObjectNullable => {
          const __is = (input: any): input is ObjectNullable => {
            const $io0 = (input: any): boolean =>
              Array.isArray(input.value) &&
              input.value.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io1(elem),
              );
            const $io1 = (input: any): boolean =>
              "string" === typeof input.name &&
              "object" === typeof input.manufacturer &&
              null !== input.manufacturer &&
              $io2(input.manufacturer) &&
              (null === input.brand ||
                ("object" === typeof input.brand &&
                  null !== input.brand &&
                  $io3(input.brand))) &&
              (null === input.similar ||
                ("object" === typeof input.similar &&
                  null !== input.similar &&
                  $iu0(input.similar)));
            const $io2 = (input: any): boolean =>
              "manufacturer" === input.type && "string" === typeof input.name;
            const $io3 = (input: any): boolean =>
              "brand" === input.type && "string" === typeof input.name;
            const $iu0 = (input: any): any =>
              (() => {
                if ("brand" === input.type) return $io3(input);
                else if ("manufacturer" === input.type) return $io2(input);
                else return false;
              })();
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectNullable => {
              const $guard = (typia.protobuf.assertEncode as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ((Array.isArray(input.value) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value",
                      expected: "Array<ObjectNullable.IProduct>",
                      value: input.value,
                    },
                    errorFactory,
                  )) &&
                  input.value.every(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".value[" + _index1 + "]",
                            expected: "ObjectNullable.IProduct",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao1(
                          elem,
                          _path + ".value[" + _index1 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".value[" + _index1 + "]",
                          expected: "ObjectNullable.IProduct",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".value",
                    expected: "Array<ObjectNullable.IProduct>",
                    value: input.value,
                  },
                  errorFactory,
                );
              const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("string" === typeof input.name ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".name",
                      expected: "string",
                      value: input.name,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input.manufacturer &&
                  null !== input.manufacturer) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".manufacturer",
                      expected: "ObjectNullable.IManufacturer",
                      value: input.manufacturer,
                    },
                    errorFactory,
                  )) &&
                  $ao2(
                    input.manufacturer,
                    _path + ".manufacturer",
                    true && _exceptionable,
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".manufacturer",
                      expected: "ObjectNullable.IManufacturer",
                      value: input.manufacturer,
                    },
                    errorFactory,
                  )) &&
                (null === input.brand ||
                  ((("object" === typeof input.brand && null !== input.brand) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".brand",
                        expected: "(ObjectNullable.IBrand | null)",
                        value: input.brand,
                      },
                      errorFactory,
                    )) &&
                    $ao3(
                      input.brand,
                      _path + ".brand",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".brand",
                      expected: "(ObjectNullable.IBrand | null)",
                      value: input.brand,
                    },
                    errorFactory,
                  )) &&
                (null === input.similar ||
                  ((("object" === typeof input.similar &&
                    null !== input.similar) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".similar",
                        expected:
                          "(ObjectNullable.IBrand | ObjectNullable.IManufacturer | null)",
                        value: input.similar,
                      },
                      errorFactory,
                    )) &&
                    $au0(
                      input.similar,
                      _path + ".similar",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".similar",
                      expected:
                        "(ObjectNullable.IBrand | ObjectNullable.IManufacturer | null)",
                      value: input.similar,
                    },
                    errorFactory,
                  ));
              const $ao2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("manufacturer" === input.type ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".type",
                      expected: '"manufacturer"',
                      value: input.type,
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input.name ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".name",
                      expected: "string",
                      value: input.name,
                    },
                    errorFactory,
                  ));
              const $ao3 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("brand" === input.type ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".type",
                      expected: '"brand"',
                      value: input.type,
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input.name ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".name",
                      expected: "string",
                      value: input.name,
                    },
                    errorFactory,
                  ));
              const $au0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): any =>
                (() => {
                  if ("brand" === input.type)
                    return $ao3(input, _path, true && _exceptionable);
                  else if ("manufacturer" === input.type)
                    return $ao2(input, _path, true && _exceptionable);
                  else
                    return $guard(
                      _exceptionable,
                      {
                        path: _path,
                        expected:
                          "(ObjectNullable.IBrand | ObjectNullable.IManufacturer)",
                        value: input,
                      },
                      errorFactory,
                    );
                })();
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ObjectNullable",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectNullable",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        };
        const encode = (input: ObjectNullable): Uint8Array => {
          const $throws = (typia.protobuf.assertEncode as any).throws;
          const $Sizer = (typia.protobuf.assertEncode as any).Sizer;
          const $Writer = (typia.protobuf.assertEncode as any).Writer;
          const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
              // property "value";
              if (0 !== input.value.length) {
                for (const elem of input.value) {
                  // 1 -> ObjectNullable.IProduct;
                  writer.uint32(10);
                  writer.fork();
                  $peo1(elem);
                  writer.ldelim();
                }
              }
            };
            const $peo1 = (input: any): any => {
              // property "name";
              writer.uint32(10);
              writer.string(input.name);
              // property "manufacturer";
              // 2 -> ObjectNullable.IManufacturer;
              writer.uint32(18);
              writer.fork();
              $peo2(input.manufacturer);
              writer.ldelim();
              // property "brand";
              if (null !== input.brand) {
                // 3 -> ObjectNullable.IBrand;
                writer.uint32(26);
                writer.fork();
                $peo3(input.brand);
                writer.ldelim();
              }
              // property "similar";
              if (null !== input.similar) {
                if ("brand" === input.similar.type)
                  (() => {
                    // 4 -> ObjectNullable.IBrand;
                    writer.uint32(34);
                    writer.fork();
                    $peo3(input.similar);
                    writer.ldelim();
                  })();
                else if ("manufacturer" === input.similar.type)
                  (() => {
                    // 5 -> ObjectNullable.IManufacturer;
                    writer.uint32(42);
                    writer.fork();
                    $peo2(input.similar);
                    writer.ldelim();
                  })();
                else
                  $throws({
                    expected:
                      "(ObjectNullable.IBrand | ObjectNullable.IManufacturer)",
                    value: input.similar,
                  });
              }
            };
            const $peo2 = (input: any): any => {
              // property "type";
              writer.uint32(10);
              writer.string(input.type);
              // property "name";
              writer.uint32(18);
              writer.string(input.name);
            };
            const $peo3 = (input: any): any => {
              // property "type";
              writer.uint32(10);
              writer.string(input.type);
              // property "name";
              writer.uint32(18);
              writer.string(input.name);
            };
            const $io1 = (input: any): boolean =>
              "string" === typeof input.name &&
              "object" === typeof input.manufacturer &&
              null !== input.manufacturer &&
              $io2(input.manufacturer) &&
              (null === input.brand ||
                ("object" === typeof input.brand &&
                  null !== input.brand &&
                  $io3(input.brand))) &&
              (null === input.similar ||
                ("object" === typeof input.similar &&
                  null !== input.similar &&
                  $iu0(input.similar)));
            const $io2 = (input: any): boolean =>
              "manufacturer" === input.type && "string" === typeof input.name;
            const $io3 = (input: any): boolean =>
              "brand" === input.type && "string" === typeof input.name;
            const $iu0 = (input: any): any =>
              (() => {
                if ("brand" === input.type) return $io3(input);
                else if ("manufacturer" === input.type) return $io2(input);
                else return false;
              })();
            //ObjectNullable;
            $peo0(input);
            return writer;
          };
          const sizer = encoder(new $Sizer());
          const writer = encoder(new $Writer(sizer));
          return writer.buffer();
        };
        return encode(assert(input, errorFactory));
      })(input, (p) => new CustomGuardError(p)),
    decode: (input: Uint8Array): import("typia").Resolved<ObjectNullable> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          value: [] as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // type: Array<ObjectNullable.IProduct>;
              output.value.push($pdo1(reader, reader.uint32()));
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const $pdo1 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          name: "" as any,
          manufacturer: undefined as any,
          brand: null as any,
          similar: null as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // string;
              output.name = reader.string();
              break;
            case 2:
              // ObjectNullable.IManufacturer;
              output.manufacturer = $pdo2(reader, reader.uint32());
              break;
            case 3:
              // ObjectNullable.IBrand;
              output.brand = $pdo3(reader, reader.uint32());
              break;
            case 4:
              // ObjectNullable.IBrand;
              output.similar = $pdo3(reader, reader.uint32());
              break;
            case 5:
              // ObjectNullable.IManufacturer;
              output.similar = $pdo2(reader, reader.uint32());
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const $pdo2 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          type: undefined as any,
          name: "" as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // string;
              output.type = reader.string();
              break;
            case 2:
              // string;
              output.name = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const $pdo3 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          type: undefined as any,
          name: "" as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // string;
              output.type = reader.string();
              break;
            case 2:
              // string;
              output.name = reader.string();
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
      'syntax = "proto3";\n\nmessage ObjectNullable {\n  repeated ObjectNullable.IProduct value = 1;\n  message IProduct {\n    required string name = 1;\n    required ObjectNullable.IManufacturer manufacturer = 2;\n    optional ObjectNullable.IBrand brand = 3;\n    oneof similar {\n      ObjectNullable.IBrand v4 = 4;\n      ObjectNullable.IManufacturer v5 = 5;\n    }\n  }\n\n  message IManufacturer {\n    required string type = 1;\n    required string name = 2;\n  }\n\n  message IBrand {\n    required string type = 1;\n    required string name = 2;\n  }\n}',
  });
