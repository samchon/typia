import typia from "typia";

import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ObjectHttpFormData } from "../../../structures/ObjectHttpFormData";

export const test_assertGuard_ObjectHttpFormData = _test_assertGuard(
  "ObjectHttpFormData",
)<ObjectHttpFormData>(ObjectHttpFormData)((input) =>
  ((input: any): asserts input is ObjectHttpFormData => {
    const __is = (input: any): input is ObjectHttpFormData => {
      const $io0 = (input: any): boolean =>
        "string" === typeof input.id &&
        /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
          input.id,
        ) &&
        Array.isArray(input.strings) &&
        input.strings.every((elem: any) => "string" === typeof elem) &&
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
        const $guard = (typia.assertGuard as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("string" === typeof input.id &&
            (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
              input.id,
            ) ||
              $guard(_exceptionable, {
                path: _path + ".id",
                expected: 'string & Format<"uuid">',
                value: input.id,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".id",
              expected: '(string & Format<"uuid">)',
              value: input.id,
            })) &&
          (((Array.isArray(input.strings) ||
            $guard(_exceptionable, {
              path: _path + ".strings",
              expected: "Array<string>",
              value: input.strings,
            })) &&
            input.strings.every(
              (elem: any, _index1: number) =>
                "string" === typeof elem ||
                $guard(_exceptionable, {
                  path: _path + ".strings[" + _index1 + "]",
                  expected: "string",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".strings",
              expected: "Array<string>",
              value: input.strings,
            })) &&
          (("number" === typeof input.number &&
            Number.isFinite(input.number)) ||
            $guard(_exceptionable, {
              path: _path + ".number",
              expected: "number",
              value: input.number,
            })) &&
          (((Array.isArray(input.integers) ||
            $guard(_exceptionable, {
              path: _path + ".integers",
              expected: 'Array<number & Type<"int32">>',
              value: input.integers,
            })) &&
            input.integers.every(
              (elem: any, _index2: number) =>
                ("number" === typeof elem &&
                  ((Math.floor(elem) === elem &&
                    -2147483648 <= elem &&
                    elem <= 2147483647) ||
                    $guard(_exceptionable, {
                      path: _path + ".integers[" + _index2 + "]",
                      expected: 'number & Type<"int32">',
                      value: elem,
                    }))) ||
                $guard(_exceptionable, {
                  path: _path + ".integers[" + _index2 + "]",
                  expected: '(number & Type<"int32">)',
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".integers",
              expected: 'Array<number & Type<"int32">>',
              value: input.integers,
            })) &&
          (input.blob instanceof Blob ||
            $guard(_exceptionable, {
              path: _path + ".blob",
              expected: "Blob",
              value: input.blob,
            })) &&
          (((Array.isArray(input.blobs) ||
            $guard(_exceptionable, {
              path: _path + ".blobs",
              expected: "Array<Blob>",
              value: input.blobs,
            })) &&
            input.blobs.every(
              (elem: any, _index3: number) =>
                elem instanceof Blob ||
                $guard(_exceptionable, {
                  path: _path + ".blobs[" + _index3 + "]",
                  expected: "Blob",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".blobs",
              expected: "Array<Blob>",
              value: input.blobs,
            })) &&
          (input.file instanceof File ||
            $guard(_exceptionable, {
              path: _path + ".file",
              expected: "File",
              value: input.file,
            })) &&
          (((Array.isArray(input.files) ||
            $guard(_exceptionable, {
              path: _path + ".files",
              expected: "Array<File>",
              value: input.files,
            })) &&
            input.files.every(
              (elem: any, _index4: number) =>
                elem instanceof File ||
                $guard(_exceptionable, {
                  path: _path + ".files[" + _index4 + "]",
                  expected: "File",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".files",
              expected: "Array<File>",
              value: input.files,
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectHttpFormData",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectHttpFormData",
            value: input,
          })
        );
      })(input, "$input", true);
  })(input),
);
