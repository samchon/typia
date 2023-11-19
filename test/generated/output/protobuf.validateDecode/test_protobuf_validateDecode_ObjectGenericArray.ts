import typia from "../../../../src";
import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_protobuf_createValidateDecode_ObjectGenericArray =
  _test_protobuf_validateDecode("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )({
    decode: (input) =>
      ((
        input: Uint8Array,
      ): typia.IValidation<typia.Resolved<ObjectGenericArray>> => {
        const validate = (
          input: any,
        ): typia.IValidation<ObjectGenericArray> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectGenericArray => {
            const $io0 = (input: any): boolean =>
              "object" === typeof input.pagination &&
              null !== input.pagination &&
              "number" === typeof (input.pagination as any).page &&
              Number.isFinite((input.pagination as any).page) &&
              "number" === typeof (input.pagination as any).limit &&
              Number.isFinite((input.pagination as any).limit) &&
              "number" === typeof (input.pagination as any).total_count &&
              Number.isFinite((input.pagination as any).total_count) &&
              "number" === typeof (input.pagination as any).total_pages &&
              Number.isFinite((input.pagination as any).total_pages) &&
              Array.isArray(input.data) &&
              input.data.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io2(elem),
              );
            const $io2 = (input: any): boolean =>
              "string" === typeof input.name &&
              "number" === typeof input.age &&
              Number.isFinite(input.age);
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input)) {
            const $report = (typia.protobuf.validateDecode as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectGenericArray => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ((("object" === typeof input.pagination &&
                    null !== input.pagination) ||
                    $report(_exceptionable, {
                      path: _path + ".pagination",
                      expected: "ObjectGenericArray.IPagination",
                      value: input.pagination,
                    })) &&
                    $vo1(
                      input.pagination,
                      _path + ".pagination",
                      true && _exceptionable,
                    )) ||
                    $report(_exceptionable, {
                      path: _path + ".pagination",
                      expected: "ObjectGenericArray.IPagination",
                      value: input.pagination,
                    }),
                  ((Array.isArray(input.data) ||
                    $report(_exceptionable, {
                      path: _path + ".data",
                      expected: "Array<ObjectGenericArray.IPerson>",
                      value: input.data,
                    })) &&
                    input.data
                      .map(
                        (elem: any, _index1: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path: _path + ".data[" + _index1 + "]",
                              expected: "ObjectGenericArray.IPerson",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + ".data[" + _index1 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path: _path + ".data[" + _index1 + "]",
                            expected: "ObjectGenericArray.IPerson",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".data",
                      expected: "Array<ObjectGenericArray.IPerson>",
                      value: input.data,
                    }),
                ].every((flag: boolean) => flag);
              const $vo1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("number" === typeof input.page &&
                    Number.isFinite(input.page)) ||
                    $report(_exceptionable, {
                      path: _path + ".page",
                      expected: "number",
                      value: input.page,
                    }),
                  ("number" === typeof input.limit &&
                    Number.isFinite(input.limit)) ||
                    $report(_exceptionable, {
                      path: _path + ".limit",
                      expected: "number",
                      value: input.limit,
                    }),
                  ("number" === typeof input.total_count &&
                    Number.isFinite(input.total_count)) ||
                    $report(_exceptionable, {
                      path: _path + ".total_count",
                      expected: "number",
                      value: input.total_count,
                    }),
                  ("number" === typeof input.total_pages &&
                    Number.isFinite(input.total_pages)) ||
                    $report(_exceptionable, {
                      path: _path + ".total_pages",
                      expected: "number",
                      value: input.total_pages,
                    }),
                ].every((flag: boolean) => flag);
              const $vo2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "string" === typeof input.name ||
                    $report(_exceptionable, {
                      path: _path + ".name",
                      expected: "string",
                      value: input.name,
                    }),
                  ("number" === typeof input.age &&
                    Number.isFinite(input.age)) ||
                    $report(_exceptionable, {
                      path: _path + ".age",
                      expected: "number",
                      value: input.age,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectGenericArray",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectGenericArray",
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
        ): typia.Resolved<ObjectGenericArray> => {
          const $Reader = (typia.protobuf.validateDecode as any).Reader;
          const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
              pagination: undefined as any,
              data: [] as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // ObjectGenericArray.IPagination;
                  output.pagination = $pdo1(reader, reader.uint32());
                  break;
                case 2:
                  // type: Array<ObjectGenericArray.IPerson>;
                  output.data.push($pdo2(reader, reader.uint32()));
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
              page: undefined as any,
              limit: undefined as any,
              total_count: undefined as any,
              total_pages: undefined as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // double;
                  output.page = reader.double();
                  break;
                case 2:
                  // double;
                  output.limit = reader.double();
                  break;
                case 3:
                  // double;
                  output.total_count = reader.double();
                  break;
                case 4:
                  // double;
                  output.total_pages = reader.double();
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
              name: "" as any,
              age: undefined as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // string;
                  output.name = reader.string();
                  break;
                case 2:
                  // double;
                  output.age = reader.double();
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
      })(input),
    encode: (input: ObjectGenericArray): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "pagination";
          // 1 -> ObjectGenericArray.IPagination;
          writer.uint32(10);
          writer.fork();
          $peo1(input.pagination);
          writer.ldelim();
          // property "data";
          if (0 !== input.data.length) {
            for (const elem of input.data) {
              // 2 -> ObjectGenericArray.IPerson;
              writer.uint32(18);
              writer.fork();
              $peo2(elem);
              writer.ldelim();
            }
          }
        };
        const $peo1 = (input: any): any => {
          // property "page";
          writer.uint32(9);
          writer.double(input.page);
          // property "limit";
          writer.uint32(17);
          writer.double(input.limit);
          // property "total_count";
          writer.uint32(25);
          writer.double(input.total_count);
          // property "total_pages";
          writer.uint32(33);
          writer.double(input.total_pages);
        };
        const $peo2 = (input: any): any => {
          // property "name";
          writer.uint32(10);
          writer.string(input.name);
          // property "age";
          writer.uint32(17);
          writer.double(input.age);
        };
        const $io1 = (input: any): boolean =>
          "number" === typeof input.page &&
          "number" === typeof input.limit &&
          "number" === typeof input.total_count &&
          "number" === typeof input.total_pages;
        const $io2 = (input: any): boolean =>
          "string" === typeof input.name && "number" === typeof input.age;
        //ObjectGenericArray;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
