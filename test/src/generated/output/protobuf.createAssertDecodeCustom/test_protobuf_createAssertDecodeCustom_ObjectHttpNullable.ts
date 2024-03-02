import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { ObjectHttpNullable } from "../../../structures/ObjectHttpNullable";

export const test_protobuf_createAssertDecodeCustom_ObjectHttpNullable =
  _test_protobuf_assertDecode(CustomGuardError)(
    "ObjectHttpNullable",
  )<ObjectHttpNullable>(ObjectHttpNullable)({
    decode: (
      input: Uint8Array,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): typia.Resolved<ObjectHttpNullable> => {
      const decode = (
        input: Uint8Array,
      ): typia.Resolved<ObjectHttpNullable> => {
        const $Reader = (typia.protobuf.createAssertDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {
            boolean: null as any,
            bigint: null as any,
            number: null as any,
            string: null as any,
            constantBoolean: null as any,
            constantBigint: null as any,
            constantNumber: null as any,
            constantString: null as any,
            nullableArray: null as any,
          } as any;
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // bool;
                output.boolean = reader.bool();
                break;
              case 2:
                // int64;
                output.bigint = reader.int64();
                break;
              case 3:
                // double;
                output.number = reader.double();
                break;
              case 4:
                // string;
                output.string = reader.string();
                break;
              case 5:
                // bool;
                output.constantBoolean = reader.bool();
                break;
              case 6:
                // uint64;
                output.constantBigint = reader.uint64();
                break;
              case 7:
                // int32;
                output.constantNumber = reader.int32();
                break;
              case 8:
                // string;
                output.constantString = reader.string();
                break;
              case 9:
                // type: Array<number>;
                output.nullableArray ??= [] as any[];
                if (2 === (tag & 7)) {
                  const piece = reader.uint32() + reader.index();
                  while (reader.index() < piece)
                    output.nullableArray.push(reader.double());
                } else output.nullableArray.push(reader.double());
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
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ObjectHttpNullable => {
        const __is = (input: any): input is ObjectHttpNullable => {
          const $io0 = (input: any): boolean =>
            (null === input.boolean || "boolean" === typeof input.boolean) &&
            (null === input.bigint || "bigint" === typeof input.bigint) &&
            (null === input.number ||
              ("number" === typeof input.number &&
                Number.isFinite(input.number) &&
                1 <= input.number)) &&
            (null === input.string || "string" === typeof input.string) &&
            (null === input.constantBoolean ||
              true === input.constantBoolean) &&
            (null === input.constantBigint ||
              BigInt(1) === input.constantBigint ||
              BigInt(2) === input.constantBigint ||
              BigInt(3) === input.constantBigint) &&
            (null === input.constantNumber ||
              3 === input.constantNumber ||
              2 === input.constantNumber ||
              1 === input.constantNumber) &&
            (null === input.constantString ||
              "three" === input.constantString ||
              "two" === input.constantString ||
              "one" === input.constantString) &&
            (null === input.nullableArray ||
              (Array.isArray(input.nullableArray) &&
                input.nullableArray.every(
                  (elem: any) =>
                    "number" === typeof elem && Number.isFinite(elem),
                )));
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectHttpNullable => {
            const $guard = (typia.protobuf.createAssertDecode as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (null === input.boolean ||
                "boolean" === typeof input.boolean ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".boolean",
                    expected: "(boolean | null)",
                    value: input.boolean,
                  },
                  errorFactory,
                )) &&
              (null === input.bigint ||
                "bigint" === typeof input.bigint ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".bigint",
                    expected: "(bigint | null)",
                    value: input.bigint,
                  },
                  errorFactory,
                )) &&
              (null === input.number ||
                ("number" === typeof input.number &&
                  (Number.isFinite(input.number) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".number",
                        expected: "number",
                        value: input.number,
                      },
                      errorFactory,
                    )) &&
                  (1 <= input.number ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".number",
                        expected: "number & Minimum<1>",
                        value: input.number,
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".number",
                    expected: "((number & Minimum<1>) | null)",
                    value: input.number,
                  },
                  errorFactory,
                )) &&
              (null === input.string ||
                "string" === typeof input.string ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".string",
                    expected: "(null | string)",
                    value: input.string,
                  },
                  errorFactory,
                )) &&
              (null === input.constantBoolean ||
                true === input.constantBoolean ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".constantBoolean",
                    expected: "(null | true)",
                    value: input.constantBoolean,
                  },
                  errorFactory,
                )) &&
              (null === input.constantBigint ||
                BigInt(1) === input.constantBigint ||
                BigInt(2) === input.constantBigint ||
                BigInt(3) === input.constantBigint ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".constantBigint",
                    expected: "(1 | 2 | 3 | null)",
                    value: input.constantBigint,
                  },
                  errorFactory,
                )) &&
              (null === input.constantNumber ||
                3 === input.constantNumber ||
                2 === input.constantNumber ||
                1 === input.constantNumber ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".constantNumber",
                    expected: "(1 | 2 | 3 | null)",
                    value: input.constantNumber,
                  },
                  errorFactory,
                )) &&
              (null === input.constantString ||
                "three" === input.constantString ||
                "two" === input.constantString ||
                "one" === input.constantString ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".constantString",
                    expected: '("one" | "three" | "two" | null)',
                    value: input.constantString,
                  },
                  errorFactory,
                )) &&
              (null === input.nullableArray ||
                ((Array.isArray(input.nullableArray) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".nullableArray",
                      expected: "(Array<number> | null)",
                      value: input.nullableArray,
                    },
                    errorFactory,
                  )) &&
                  input.nullableArray.every(
                    (elem: any, _index1: number) =>
                      ("number" === typeof elem && Number.isFinite(elem)) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".nullableArray[" + _index1 + "]",
                          expected: "number",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".nullableArray",
                    expected: "(Array<number> | null)",
                    value: input.nullableArray,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectHttpNullable",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectHttpNullable",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const output = decode(input);
      return assert(output, errorFactory) as any;
    },
    encode: (input: ObjectHttpNullable): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "boolean";
          if (null !== input.boolean) {
            writer.uint32(8);
            writer.bool(input.boolean);
          }
          // property "bigint";
          if (null !== input.bigint) {
            writer.uint32(16);
            writer.int64(input.bigint);
          }
          // property "number";
          if (null !== input.number) {
            writer.uint32(25);
            writer.double(input.number);
          }
          // property "string";
          if (null !== input.string) {
            writer.uint32(34);
            writer.string(input.string);
          }
          // property "constantBoolean";
          if (null !== input.constantBoolean) {
            writer.uint32(40);
            writer.bool(input.constantBoolean);
          }
          // property "constantBigint";
          if (null !== input.constantBigint) {
            writer.uint32(48);
            writer.uint64(input.constantBigint);
          }
          // property "constantNumber";
          if (null !== input.constantNumber) {
            writer.uint32(56);
            writer.int32(input.constantNumber);
          }
          // property "constantString";
          if (null !== input.constantString) {
            writer.uint32(66);
            writer.string(input.constantString);
          }
          // property "nullableArray";
          if (null !== input.nullableArray) {
            if (0 !== input.nullableArray.length) {
              writer.uint32(74);
              writer.fork();
              for (const elem of input.nullableArray) {
                writer.double(elem);
              }
              writer.ldelim();
            }
          }
        };
        //ObjectHttpNullable;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
