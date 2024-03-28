import typia from "typia";

import { _test_http_validateFormData } from "../../../internal/_test_http_validateFormData";
import { ObjectHttpFormData } from "../../../structures/ObjectHttpFormData";

export const test_http_validateFormData_ObjectHttpFormData =
  _test_http_validateFormData("ObjectHttpFormData")<ObjectHttpFormData>(
    ObjectHttpFormData,
  )((input) =>
    ((
      input: FormData,
    ): typia.IValidation<typia.Resolved<ObjectHttpFormData>> => {
      const validate = (input: any): typia.IValidation<ObjectHttpFormData> => {
        const errors = [] as any[];
        const __is = (input: any): input is ObjectHttpFormData => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
              input.id,
            ) &&
            "number" === typeof input.number &&
            Number.isFinite(input.number) &&
            Array.isArray(input.integers) &&
            input.integers.every(
              (elem: any) =>
                "number" === typeof elem &&
                Math.floor(elem) === elem &&
                -2147483648 <= elem &&
                elem <= 2147483647,
            ) &&
            input.blob instanceof Blob &&
            Array.isArray(input.blobs) &&
            input.blobs.every((elem: any) => elem instanceof Blob) &&
            input.file instanceof File &&
            Array.isArray(input.files) &&
            input.files.every((elem: any) => elem instanceof File);
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input)) {
          const $report = (typia.http.validateFormData as any).report(errors);
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectHttpFormData => {
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
                ("number" === typeof input.number &&
                  Number.isFinite(input.number)) ||
                  $report(_exceptionable, {
                    path: _path + ".number",
                    expected: "number",
                    value: input.number,
                  }),
                ((Array.isArray(input.integers) ||
                  $report(_exceptionable, {
                    path: _path + ".integers",
                    expected: 'Array<number & Type<"int32">>',
                    value: input.integers,
                  })) &&
                  input.integers
                    .map(
                      (elem: any, _index1: number) =>
                        ("number" === typeof elem &&
                          ((Math.floor(elem) === elem &&
                            -2147483648 <= elem &&
                            elem <= 2147483647) ||
                            $report(_exceptionable, {
                              path: _path + ".integers[" + _index1 + "]",
                              expected: 'number & Type<"int32">',
                              value: elem,
                            }))) ||
                        $report(_exceptionable, {
                          path: _path + ".integers[" + _index1 + "]",
                          expected: '(number & Type<"int32">)',
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".integers",
                    expected: 'Array<number & Type<"int32">>',
                    value: input.integers,
                  }),
                input.blob instanceof Blob ||
                  $report(_exceptionable, {
                    path: _path + ".blob",
                    expected: "Blob",
                    value: input.blob,
                  }),
                ((Array.isArray(input.blobs) ||
                  $report(_exceptionable, {
                    path: _path + ".blobs",
                    expected: "Array<Blob>",
                    value: input.blobs,
                  })) &&
                  input.blobs
                    .map(
                      (elem: any, _index2: number) =>
                        elem instanceof Blob ||
                        $report(_exceptionable, {
                          path: _path + ".blobs[" + _index2 + "]",
                          expected: "Blob",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".blobs",
                    expected: "Array<Blob>",
                    value: input.blobs,
                  }),
                input.file instanceof File ||
                  $report(_exceptionable, {
                    path: _path + ".file",
                    expected: "File",
                    value: input.file,
                  }),
                ((Array.isArray(input.files) ||
                  $report(_exceptionable, {
                    path: _path + ".files",
                    expected: "Array<File>",
                    value: input.files,
                  })) &&
                  input.files
                    .map(
                      (elem: any, _index3: number) =>
                        elem instanceof File ||
                        $report(_exceptionable, {
                          path: _path + ".files[" + _index3 + "]",
                          expected: "File",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".files",
                    expected: "Array<File>",
                    value: input.files,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectHttpFormData",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectHttpFormData",
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
        input: FormData,
      ): import("typia").Resolved<ObjectHttpFormData> => {
        const $string = (typia.http.validateFormData as any).string;
        const $number = (typia.http.validateFormData as any).number;
        const $blob = (typia.http.validateFormData as any).blob;
        const $file = (typia.http.validateFormData as any).file;
        const output = {
          id: $string(input.get("id")),
          number: $number(input.get("number")),
          integers: input.getAll("integers").map((elem: any) => $number(elem)),
          blob: $blob(input.get("blob")),
          blobs: input.getAll("blobs").map((elem: any) => $blob(elem)),
          file: $file(input.get("file")),
          files: input.getAll("files").map((elem: any) => $file(elem)),
        };
        return output as any;
      };
      const output = decode(input);
      return validate(output) as any;
    })(input),
  );
