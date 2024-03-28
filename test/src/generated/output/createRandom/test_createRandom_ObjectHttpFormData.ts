import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { ObjectHttpFormData } from "../../../structures/ObjectHttpFormData";

export const test_createRandom_ObjectHttpFormData = _test_random(
  "ObjectHttpFormData",
)<ObjectHttpFormData>(ObjectHttpFormData)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (ObjectHttpFormData as any)
      .RANDOM,
  ): import("typia").Resolved<ObjectHttpFormData> => {
    const $generator = (typia.createRandom as any).generator;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
      id:
        (generator?.customs ?? $generator.customs)?.string?.([
          {
            name: 'Format<"uuid">',
            kind: "format",
            value: "uuid",
          },
        ]) ?? (generator?.uuid ?? $generator.uuid)(),
      number:
        (generator?.customs ?? $generator.customs)?.number?.([]) ??
        (generator?.number ?? $generator.number)(0, 100),
      integers: (generator?.array ?? $generator.array)(
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"int32">',
              kind: "type",
              value: "int32",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
      ),
      blob: new Blob([
        new Uint8Array(
          (generator?.array ?? $generator.array)((): any =>
            (generator?.integer ?? $generator.integer)(0, 255),
          ),
        ),
      ]),
      blobs: (generator?.array ?? $generator.array)(
        () =>
          new Blob([
            new Uint8Array(
              (generator?.array ?? $generator.array)((): any =>
                (generator?.integer ?? $generator.integer)(0, 255),
              ),
            ),
          ]),
      ),
      file: new File(
        [
          new Uint8Array(
            (generator?.array ?? $generator.array)((): any =>
              (generator?.integer ?? $generator.integer)(0, 255),
            ),
          ),
        ],
        `${(generator?.string ?? $generator.string)(8)}.${(generator?.string ?? $generator.string)(3)}`,
      ),
      files: (generator?.array ?? $generator.array)(
        () =>
          new File(
            [
              new Uint8Array(
                (generator?.array ?? $generator.array)((): any =>
                  (generator?.integer ?? $generator.integer)(0, 255),
                ),
              ),
            ],
            `${(generator?.string ?? $generator.string)(8)}.${(generator?.string ?? $generator.string)(3)}`,
          ),
      ),
    });
    return $ro0();
  },
  assert: (
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
        const $guard = (typia.createAssert as any).guard;
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
  },
});
