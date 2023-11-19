import typia from "../../../../src";
import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_protobuf_createValidateDecode_ClassPropertyAssignment =
  _test_protobuf_validateDecode(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)({
    decode: (input) =>
      ((
        input: Uint8Array,
      ): typia.IValidation<typia.Resolved<ClassPropertyAssignment>> => {
        const validate = (
          input: any,
        ): typia.IValidation<ClassPropertyAssignment> => {
          const errors = [] as any[];
          const __is = (input: any): input is ClassPropertyAssignment => {
            const $io0 = (input: any): boolean =>
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "string" === typeof input.name &&
              "assignment" === input.note &&
              false === input.editable &&
              "boolean" === typeof input.incremental;
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
            ): input is ClassPropertyAssignment => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("number" === typeof input.id && Number.isFinite(input.id)) ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: "number",
                      value: input.id,
                    }),
                  "string" === typeof input.name ||
                    $report(_exceptionable, {
                      path: _path + ".name",
                      expected: "string",
                      value: input.name,
                    }),
                  "assignment" === input.note ||
                    $report(_exceptionable, {
                      path: _path + ".note",
                      expected: '"assignment"',
                      value: input.note,
                    }),
                  false === input.editable ||
                    $report(_exceptionable, {
                      path: _path + ".editable",
                      expected: "false",
                      value: input.editable,
                    }),
                  "boolean" === typeof input.incremental ||
                    $report(_exceptionable, {
                      path: _path + ".incremental",
                      expected: "boolean",
                      value: input.incremental,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ClassPropertyAssignment",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ClassPropertyAssignment",
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
        ): typia.Resolved<ClassPropertyAssignment> => {
          const $Reader = (typia.protobuf.validateDecode as any).Reader;
          const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
              id: undefined as any,
              name: "" as any,
              note: undefined as any,
              editable: undefined as any,
              incremental: undefined as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // double;
                  output.id = reader.double();
                  break;
                case 2:
                  // string;
                  output.name = reader.string();
                  break;
                case 3:
                  // string;
                  output.note = reader.string();
                  break;
                case 4:
                  // bool;
                  output.editable = reader.bool();
                  break;
                case 5:
                  // bool;
                  output.incremental = reader.bool();
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
    encode: (input: ClassPropertyAssignment): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "id";
          writer.uint32(9);
          writer.double(input.id);
          // property "name";
          writer.uint32(18);
          writer.string(input.name);
          // property "note";
          writer.uint32(26);
          writer.string(input.note);
          // property "editable";
          writer.uint32(32);
          writer.bool(input.editable);
          // property "incremental";
          writer.uint32(40);
          writer.bool(input.incremental);
        };
        //ClassPropertyAssignment;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
