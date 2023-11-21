import typia from "../../../../src";
import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_protobuf_createValidateDecode_ObjectPartial =
  _test_protobuf_validateDecode("ObjectPartial")<ObjectPartial>(ObjectPartial)({
    decode: (
      input: Uint8Array,
    ): typia.IValidation<typia.Resolved<ObjectPartial>> => {
      const validate = (input: any): typia.IValidation<ObjectPartial> => {
        const errors = [] as any[];
        const __is = (input: any): input is ObjectPartial => {
          const $io0 = (input: any): boolean =>
            (undefined === input.boolean ||
              "boolean" === typeof input.boolean) &&
            (undefined === input.number ||
              ("number" === typeof input.number &&
                Number.isFinite(input.number))) &&
            (undefined === input.string || "string" === typeof input.string) &&
            (undefined === input.array ||
              (Array.isArray(input.array) &&
                input.array.every(
                  (elem: any) =>
                    "number" === typeof elem && Number.isFinite(elem),
                ))) &&
            (null === input.object ||
              undefined === input.object ||
              ("object" === typeof input.object &&
                null !== input.object &&
                $io1(input.object)));
          const $io1 = (input: any): boolean =>
            "boolean" === typeof input.boolean &&
            "number" === typeof input.number &&
            Number.isFinite(input.number) &&
            "string" === typeof input.string &&
            Array.isArray(input.array) &&
            input.array.every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            ) &&
            (null === input.object ||
              ("object" === typeof input.object &&
                null !== input.object &&
                $io1(input.object)));
          return (
            "object" === typeof input &&
            null !== input &&
            false === Array.isArray(input) &&
            $io0(input)
          );
        };
        if (false === __is(input)) {
          const $report = (typia.protobuf.createValidateDecode as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectPartial => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                undefined === input.boolean ||
                  "boolean" === typeof input.boolean ||
                  $report(_exceptionable, {
                    path: _path + ".boolean",
                    expected: "(boolean | undefined)",
                    value: input.boolean,
                  }),
                undefined === input.number ||
                  ("number" === typeof input.number &&
                    Number.isFinite(input.number)) ||
                  $report(_exceptionable, {
                    path: _path + ".number",
                    expected: "(number | undefined)",
                    value: input.number,
                  }),
                undefined === input.string ||
                  "string" === typeof input.string ||
                  $report(_exceptionable, {
                    path: _path + ".string",
                    expected: "(string | undefined)",
                    value: input.string,
                  }),
                undefined === input.array ||
                  ((Array.isArray(input.array) ||
                    $report(_exceptionable, {
                      path: _path + ".array",
                      expected: "(Array<number> | undefined)",
                      value: input.array,
                    })) &&
                    input.array
                      .map(
                        (elem: any, _index1: number) =>
                          ("number" === typeof elem && Number.isFinite(elem)) ||
                          $report(_exceptionable, {
                            path: _path + ".array[" + _index1 + "]",
                            expected: "number",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".array",
                    expected: "(Array<number> | undefined)",
                    value: input.array,
                  }),
                null === input.object ||
                  undefined === input.object ||
                  ((("object" === typeof input.object &&
                    null !== input.object) ||
                    $report(_exceptionable, {
                      path: _path + ".object",
                      expected: "(ObjectPartial.IBase | null | undefined)",
                      value: input.object,
                    })) &&
                    $vo1(
                      input.object,
                      _path + ".object",
                      true && _exceptionable,
                    )) ||
                  $report(_exceptionable, {
                    path: _path + ".object",
                    expected: "(ObjectPartial.IBase | null | undefined)",
                    value: input.object,
                  }),
              ].every((flag: boolean) => flag);
            const $vo1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "boolean" === typeof input.boolean ||
                  $report(_exceptionable, {
                    path: _path + ".boolean",
                    expected: "boolean",
                    value: input.boolean,
                  }),
                ("number" === typeof input.number &&
                  Number.isFinite(input.number)) ||
                  $report(_exceptionable, {
                    path: _path + ".number",
                    expected: "number",
                    value: input.number,
                  }),
                "string" === typeof input.string ||
                  $report(_exceptionable, {
                    path: _path + ".string",
                    expected: "string",
                    value: input.string,
                  }),
                ((Array.isArray(input.array) ||
                  $report(_exceptionable, {
                    path: _path + ".array",
                    expected: "Array<number>",
                    value: input.array,
                  })) &&
                  input.array
                    .map(
                      (elem: any, _index2: number) =>
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        $report(_exceptionable, {
                          path: _path + ".array[" + _index2 + "]",
                          expected: "number",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".array",
                    expected: "Array<number>",
                    value: input.array,
                  }),
                null === input.object ||
                  ((("object" === typeof input.object &&
                    null !== input.object) ||
                    $report(_exceptionable, {
                      path: _path + ".object",
                      expected: "(ObjectPartial.IBase | null)",
                      value: input.object,
                    })) &&
                    $vo1(
                      input.object,
                      _path + ".object",
                      true && _exceptionable,
                    )) ||
                  $report(_exceptionable, {
                    path: _path + ".object",
                    expected: "(ObjectPartial.IBase | null)",
                    value: input.object,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input &&
                null !== input &&
                false === Array.isArray(input)) ||
                $report(true, {
                  path: _path + "",
                  expected: "Partial<ObjectPartial.IBase>",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "Partial<ObjectPartial.IBase>",
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
      const decode = (input: Uint8Array): typia.Resolved<ObjectPartial> => {
        const $Reader = (typia.protobuf.createValidateDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {} as any;
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // bool;
                output.boolean = reader.bool();
                break;
              case 2:
                // double;
                output.number = reader.double();
                break;
              case 3:
                // string;
                output.string = reader.string();
                break;
              case 4:
                // type: Array<number>;
                output.array ??= [] as any[];
                if (2 === (tag & 7)) {
                  const piece = reader.uint32() + reader.index();
                  while (reader.index() < piece)
                    output.array.push(reader.double());
                } else output.array.push(reader.double());
                break;
              case 5:
                // ObjectPartial.IBase;
                output.object = $pdo1(reader, reader.uint32());
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
            boolean: undefined as any,
            number: undefined as any,
            string: "" as any,
            array: [] as any,
            object: null as any,
          } as any;
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // bool;
                output.boolean = reader.bool();
                break;
              case 2:
                // double;
                output.number = reader.double();
                break;
              case 3:
                // string;
                output.string = reader.string();
                break;
              case 4:
                // type: Array<number>;
                if (2 === (tag & 7)) {
                  const piece = reader.uint32() + reader.index();
                  while (reader.index() < piece)
                    output.array.push(reader.double());
                } else output.array.push(reader.double());
                break;
              case 5:
                // ObjectPartial.IBase;
                output.object = $pdo1(reader, reader.uint32());
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
    encode: (input: ObjectPartial): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "boolean";
          if (undefined !== input.boolean) {
            writer.uint32(8);
            writer.bool(input.boolean);
          }
          // property "number";
          if (undefined !== input.number) {
            writer.uint32(17);
            writer.double(input.number);
          }
          // property "string";
          if (undefined !== input.string) {
            writer.uint32(26);
            writer.string(input.string);
          }
          // property "array";
          if (undefined !== input.array) {
            if (0 !== input.array.length) {
              writer.uint32(34);
              writer.fork();
              for (const elem of input.array) {
                writer.double(elem);
              }
              writer.ldelim();
            }
          }
          // property "object";
          if (undefined !== input.object && null !== input.object) {
            // 5 -> ObjectPartial.IBase;
            writer.uint32(42);
            writer.fork();
            $peo1(input.object);
            writer.ldelim();
          }
        };
        const $peo1 = (input: any): any => {
          // property "boolean";
          writer.uint32(8);
          writer.bool(input.boolean);
          // property "number";
          writer.uint32(17);
          writer.double(input.number);
          // property "string";
          writer.uint32(26);
          writer.string(input.string);
          // property "array";
          if (0 !== input.array.length) {
            writer.uint32(34);
            writer.fork();
            for (const elem of input.array) {
              writer.double(elem);
            }
            writer.ldelim();
          }
          // property "object";
          if (null !== input.object) {
            // 5 -> ObjectPartial.IBase;
            writer.uint32(42);
            writer.fork();
            $peo1(input.object);
            writer.ldelim();
          }
        };
        const $io1 = (input: any): boolean =>
          "boolean" === typeof input.boolean &&
          "number" === typeof input.number &&
          "string" === typeof input.string &&
          Array.isArray(input.array) &&
          input.array.every((elem: any) => "number" === typeof elem) &&
          (null === input.object ||
            ("object" === typeof input.object &&
              null !== input.object &&
              $io1(input.object)));
        //Partial<ObjectPartial.IBase>;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
