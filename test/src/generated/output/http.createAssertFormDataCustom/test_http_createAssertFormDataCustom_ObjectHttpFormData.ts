import typia from "typia";
import { _test_http_assertFormData } from "../../../internal/_test_http_assertFormData";
import { ObjectHttpFormData } from "../../../structures/ObjectHttpFormData";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_http_createAssertFormDataCustom_ObjectHttpFormData =
  _test_http_assertFormData(CustomGuardError)(
    "ObjectHttpFormData",
  )<ObjectHttpFormData>(ObjectHttpFormData)(
    (
      input: FormData,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): import("typia").Resolved<ObjectHttpFormData> => {
      const decode = (
        input: FormData,
      ): import("typia").Resolved<ObjectHttpFormData> => {
        const $string = (typia.http.createAssertFormData as any).string;
        const $number = (typia.http.createAssertFormData as any).number;
        const $blob = (typia.http.createAssertFormData as any).blob;
        const $file = (typia.http.createAssertFormData as any).file;
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
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ObjectHttpFormData => {
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
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectHttpFormData => {
            const $guard = (typia.http.createAssertFormData as any).guard;
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
              (("number" === typeof input.number &&
                Number.isFinite(input.number)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".number",
                    expected: "number",
                    value: input.number,
                  },
                  errorFactory,
                )) &&
              (((Array.isArray(input.integers) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".integers",
                    expected: 'Array<number & Type<"int32">>',
                    value: input.integers,
                  },
                  errorFactory,
                )) &&
                input.integers.every(
                  (elem: any, _index1: number) =>
                    ("number" === typeof elem &&
                      ((Math.floor(elem) === elem &&
                        -2147483648 <= elem &&
                        elem <= 2147483647) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".integers[" + _index1 + "]",
                            expected: 'number & Type<"int32">',
                            value: elem,
                          },
                          errorFactory,
                        ))) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".integers[" + _index1 + "]",
                        expected: '(number & Type<"int32">)',
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".integers",
                    expected: 'Array<number & Type<"int32">>',
                    value: input.integers,
                  },
                  errorFactory,
                )) &&
              (input.blob instanceof Blob ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".blob",
                    expected: "Blob",
                    value: input.blob,
                  },
                  errorFactory,
                )) &&
              (((Array.isArray(input.blobs) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".blobs",
                    expected: "Array<Blob>",
                    value: input.blobs,
                  },
                  errorFactory,
                )) &&
                input.blobs.every(
                  (elem: any, _index2: number) =>
                    elem instanceof Blob ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".blobs[" + _index2 + "]",
                        expected: "Blob",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".blobs",
                    expected: "Array<Blob>",
                    value: input.blobs,
                  },
                  errorFactory,
                )) &&
              (input.file instanceof File ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".file",
                    expected: "File",
                    value: input.file,
                  },
                  errorFactory,
                )) &&
              (((Array.isArray(input.files) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".files",
                    expected: "Array<File>",
                    value: input.files,
                  },
                  errorFactory,
                )) &&
                input.files.every(
                  (elem: any, _index3: number) =>
                    elem instanceof File ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".files[" + _index3 + "]",
                        expected: "File",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".files",
                    expected: "Array<File>",
                    value: input.files,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectHttpFormData",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectHttpFormData",
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
  );
