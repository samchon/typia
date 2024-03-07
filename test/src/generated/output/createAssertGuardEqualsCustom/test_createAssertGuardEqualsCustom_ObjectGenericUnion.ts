import typia from "typia";
import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_createAssertGuardEqualsCustom_ObjectGenericUnion =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectGenericUnion",
  )<ObjectGenericUnion>(ObjectGenericUnion)(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): asserts input is ObjectGenericUnion => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is ObjectGenericUnion => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
          "object" === typeof input.value &&
          null !== input.value &&
          $iu0(input.value, true && _exceptionable) &&
          (1 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
          "string" === typeof input.writer &&
          (null === input.answer ||
            ("object" === typeof input.answer &&
              null !== input.answer &&
              $io2(input.answer, true && _exceptionable))) &&
          "string" === typeof input.id &&
          "number" === typeof input.hit &&
          Number.isFinite(input.hit) &&
          Array.isArray(input.contents) &&
          input.contents.every(
            (elem: any, _index1: number) =>
              "object" === typeof elem &&
              null !== elem &&
              $io3(elem, true && _exceptionable),
          ) &&
          "string" === typeof input.created_at &&
          (6 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (
                [
                  "writer",
                  "answer",
                  "id",
                  "hit",
                  "contents",
                  "created_at",
                ].some((prop: any) => key === prop)
              )
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
          "string" === typeof input.id &&
          "number" === typeof input.hit &&
          Number.isFinite(input.hit) &&
          Array.isArray(input.contents) &&
          input.contents.every(
            (elem: any, _index2: number) =>
              "object" === typeof elem &&
              null !== elem &&
              $io3(elem, true && _exceptionable),
          ) &&
          "string" === typeof input.created_at &&
          (4 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (
                ["id", "hit", "contents", "created_at"].some(
                  (prop: any) => key === prop,
                )
              )
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $io3 = (input: any, _exceptionable: boolean = true): boolean =>
          "string" === typeof input.id &&
          "string" === typeof input.created_at &&
          "string" === typeof input.title &&
          "string" === typeof input.body &&
          Array.isArray(input.files) &&
          input.files.every(
            (elem: any, _index3: number) =>
              "object" === typeof elem &&
              null !== elem &&
              $io4(elem, true && _exceptionable),
          ) &&
          (5 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (
                ["id", "created_at", "title", "body", "files"].some(
                  (prop: any) => key === prop,
                )
              )
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $io4 = (input: any, _exceptionable: boolean = true): boolean =>
          "string" === typeof input.name &&
          (null === input.extension || "string" === typeof input.extension) &&
          "string" === typeof input.url &&
          (3 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (
                ["name", "extension", "url"].some((prop: any) => key === prop)
              )
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $io5 = (input: any, _exceptionable: boolean = true): boolean =>
          "string" === typeof input.writer &&
          (null === input.answer ||
            ("object" === typeof input.answer &&
              null !== input.answer &&
              $io2(input.answer, true && _exceptionable))) &&
          "string" === typeof input.id &&
          "number" === typeof input.hit &&
          Number.isFinite(input.hit) &&
          Array.isArray(input.contents) &&
          input.contents.every(
            (elem: any, _index4: number) =>
              "object" === typeof elem &&
              null !== elem &&
              $io6(elem, true && _exceptionable),
          ) &&
          "string" === typeof input.created_at &&
          (6 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (
                [
                  "writer",
                  "answer",
                  "id",
                  "hit",
                  "contents",
                  "created_at",
                ].some((prop: any) => key === prop)
              )
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $io6 = (input: any, _exceptionable: boolean = true): boolean =>
          "number" === typeof input.score &&
          Number.isFinite(input.score) &&
          "string" === typeof input.id &&
          "string" === typeof input.created_at &&
          "string" === typeof input.title &&
          "string" === typeof input.body &&
          Array.isArray(input.files) &&
          input.files.every(
            (elem: any, _index5: number) =>
              "object" === typeof elem &&
              null !== elem &&
              $io4(elem, true && _exceptionable),
          ) &&
          (6 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (
                ["score", "id", "created_at", "title", "body", "files"].some(
                  (prop: any) => key === prop,
                )
              )
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $iu0 = (input: any, _exceptionable: boolean = true): any =>
          (() => {
            if ($io5(input, false && _exceptionable))
              return $io5(input, true && _exceptionable);
            if ($io1(input, false && _exceptionable))
              return $io1(input, true && _exceptionable);
            return false;
          })();
        return "object" === typeof input && null !== input && $io0(input, true);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ObjectGenericUnion => {
          const $guard = (typia.createAssertGuardEquals as any).guard;
          const $join = (typia.createAssertGuardEquals as any).join;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (((("object" === typeof input.value && null !== input.value) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected:
                    "(ObjectGenericUnion.ISaleQuestion | ObjectGenericUnion.ISaleReview)",
                  value: input.value,
                },
                errorFactory,
              )) &&
              $au0(input.value, _path + ".value", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected:
                    "(ObjectGenericUnion.ISaleQuestion | ObjectGenericUnion.ISaleReview)",
                  value: input.value,
                },
                errorFactory,
              )) &&
            (1 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (["value"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input.writer ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".writer",
                  expected: "string",
                  value: input.writer,
                },
                errorFactory,
              )) &&
            (null === input.answer ||
              ((("object" === typeof input.answer && null !== input.answer) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".answer",
                    expected: "(ObjectGenericUnion.ISaleAnswer | null)",
                    value: input.answer,
                  },
                  errorFactory,
                )) &&
                $ao2(
                  input.answer,
                  _path + ".answer",
                  true && _exceptionable,
                )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".answer",
                  expected: "(ObjectGenericUnion.ISaleAnswer | null)",
                  value: input.answer,
                },
                errorFactory,
              )) &&
            ("string" === typeof input.id ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".id",
                  expected: "string",
                  value: input.id,
                },
                errorFactory,
              )) &&
            (("number" === typeof input.hit && Number.isFinite(input.hit)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".hit",
                  expected: "number",
                  value: input.hit,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.contents) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".contents",
                  expected: "Array<ObjectGenericUnion.ISaleArticle.IContent>",
                  value: input.contents,
                },
                errorFactory,
              )) &&
              input.contents.every(
                (elem: any, _index1: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".contents[" + _index1 + "]",
                        expected: "ObjectGenericUnion.ISaleArticle.IContent",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao3(
                      elem,
                      _path + ".contents[" + _index1 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".contents[" + _index1 + "]",
                      expected: "ObjectGenericUnion.ISaleArticle.IContent",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".contents",
                  expected: "Array<ObjectGenericUnion.ISaleArticle.IContent>",
                  value: input.contents,
                },
                errorFactory,
              )) &&
            ("string" === typeof input.created_at ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".created_at",
                  expected: "string",
                  value: input.created_at,
                },
                errorFactory,
              )) &&
            (6 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (
                  [
                    "writer",
                    "answer",
                    "id",
                    "hit",
                    "contents",
                    "created_at",
                  ].some((prop: any) => key === prop)
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
          const $ao2 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input.id ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".id",
                  expected: "string",
                  value: input.id,
                },
                errorFactory,
              )) &&
            (("number" === typeof input.hit && Number.isFinite(input.hit)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".hit",
                  expected: "number",
                  value: input.hit,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.contents) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".contents",
                  expected: "Array<ObjectGenericUnion.ISaleArticle.IContent>",
                  value: input.contents,
                },
                errorFactory,
              )) &&
              input.contents.every(
                (elem: any, _index2: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".contents[" + _index2 + "]",
                        expected: "ObjectGenericUnion.ISaleArticle.IContent",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao3(
                      elem,
                      _path + ".contents[" + _index2 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".contents[" + _index2 + "]",
                      expected: "ObjectGenericUnion.ISaleArticle.IContent",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".contents",
                  expected: "Array<ObjectGenericUnion.ISaleArticle.IContent>",
                  value: input.contents,
                },
                errorFactory,
              )) &&
            ("string" === typeof input.created_at ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".created_at",
                  expected: "string",
                  value: input.created_at,
                },
                errorFactory,
              )) &&
            (4 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (
                  ["id", "hit", "contents", "created_at"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
          const $ao3 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input.id ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".id",
                  expected: "string",
                  value: input.id,
                },
                errorFactory,
              )) &&
            ("string" === typeof input.created_at ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".created_at",
                  expected: "string",
                  value: input.created_at,
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
            ("string" === typeof input.body ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".body",
                  expected: "string",
                  value: input.body,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.files) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".files",
                  expected: "Array<ObjectGenericUnion.IAttachmentFile>",
                  value: input.files,
                },
                errorFactory,
              )) &&
              input.files.every(
                (elem: any, _index3: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".files[" + _index3 + "]",
                        expected: "ObjectGenericUnion.IAttachmentFile",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao4(
                      elem,
                      _path + ".files[" + _index3 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".files[" + _index3 + "]",
                      expected: "ObjectGenericUnion.IAttachmentFile",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".files",
                  expected: "Array<ObjectGenericUnion.IAttachmentFile>",
                  value: input.files,
                },
                errorFactory,
              )) &&
            (5 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (
                  ["id", "created_at", "title", "body", "files"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
          const $ao4 = (
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
            (null === input.extension ||
              "string" === typeof input.extension ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".extension",
                  expected: "(null | string)",
                  value: input.extension,
                },
                errorFactory,
              )) &&
            ("string" === typeof input.url ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".url",
                  expected: "string",
                  value: input.url,
                },
                errorFactory,
              )) &&
            (3 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (
                  ["name", "extension", "url"].some((prop: any) => key === prop)
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
          const $ao5 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input.writer ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".writer",
                  expected: "string",
                  value: input.writer,
                },
                errorFactory,
              )) &&
            (null === input.answer ||
              ((("object" === typeof input.answer && null !== input.answer) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".answer",
                    expected: "(ObjectGenericUnion.ISaleAnswer | null)",
                    value: input.answer,
                  },
                  errorFactory,
                )) &&
                $ao2(
                  input.answer,
                  _path + ".answer",
                  true && _exceptionable,
                )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".answer",
                  expected: "(ObjectGenericUnion.ISaleAnswer | null)",
                  value: input.answer,
                },
                errorFactory,
              )) &&
            ("string" === typeof input.id ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".id",
                  expected: "string",
                  value: input.id,
                },
                errorFactory,
              )) &&
            (("number" === typeof input.hit && Number.isFinite(input.hit)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".hit",
                  expected: "number",
                  value: input.hit,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.contents) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".contents",
                  expected: "Array<ObjectGenericUnion.ISaleReview.IContent>",
                  value: input.contents,
                },
                errorFactory,
              )) &&
              input.contents.every(
                (elem: any, _index4: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".contents[" + _index4 + "]",
                        expected: "ObjectGenericUnion.ISaleReview.IContent",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao6(
                      elem,
                      _path + ".contents[" + _index4 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".contents[" + _index4 + "]",
                      expected: "ObjectGenericUnion.ISaleReview.IContent",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".contents",
                  expected: "Array<ObjectGenericUnion.ISaleReview.IContent>",
                  value: input.contents,
                },
                errorFactory,
              )) &&
            ("string" === typeof input.created_at ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".created_at",
                  expected: "string",
                  value: input.created_at,
                },
                errorFactory,
              )) &&
            (6 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (
                  [
                    "writer",
                    "answer",
                    "id",
                    "hit",
                    "contents",
                    "created_at",
                  ].some((prop: any) => key === prop)
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
          const $ao6 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.score &&
              Number.isFinite(input.score)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".score",
                  expected: "number",
                  value: input.score,
                },
                errorFactory,
              )) &&
            ("string" === typeof input.id ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".id",
                  expected: "string",
                  value: input.id,
                },
                errorFactory,
              )) &&
            ("string" === typeof input.created_at ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".created_at",
                  expected: "string",
                  value: input.created_at,
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
            ("string" === typeof input.body ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".body",
                  expected: "string",
                  value: input.body,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.files) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".files",
                  expected: "Array<ObjectGenericUnion.IAttachmentFile>",
                  value: input.files,
                },
                errorFactory,
              )) &&
              input.files.every(
                (elem: any, _index5: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".files[" + _index5 + "]",
                        expected: "ObjectGenericUnion.IAttachmentFile",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao4(
                      elem,
                      _path + ".files[" + _index5 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".files[" + _index5 + "]",
                      expected: "ObjectGenericUnion.IAttachmentFile",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".files",
                  expected: "Array<ObjectGenericUnion.IAttachmentFile>",
                  value: input.files,
                },
                errorFactory,
              )) &&
            (6 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (
                  ["score", "id", "created_at", "title", "body", "files"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
          const $au0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): any =>
            (() => {
              if ($ao5(input, _path, false && _exceptionable))
                return $ao5(input, _path, true && _exceptionable);
              if ($ao1(input, _path, false && _exceptionable))
                return $ao1(input, _path, true && _exceptionable);
              return $guard(
                _exceptionable,
                {
                  path: _path,
                  expected:
                    "(ObjectGenericUnion.ISaleReview | ObjectGenericUnion.ISaleQuestion)",
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
                  expected: "ObjectGenericUnion",
                  value: input,
                },
                errorFactory,
              )) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectGenericUnion",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
    },
  );
