import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assert } from "../../../internal/_test_assert";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_createAssertCustom_ObjectGenericUnion = _test_assert(
  CustomGuardError,
)("ObjectGenericUnion")<ObjectGenericUnion>(ObjectGenericUnion)(
  (
    input: any,
    errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
      new CustomGuardError(p),
  ): ObjectGenericUnion => {
    const __is = (input: any): input is ObjectGenericUnion => {
      const $io0 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        $iu0(input.value);
      const $io1 = (input: any): boolean =>
        "string" === typeof input.writer &&
        (null === input.answer ||
          ("object" === typeof input.answer &&
            null !== input.answer &&
            $io2(input.answer))) &&
        "string" === typeof input.id &&
        "number" === typeof input.hit &&
        Number.isFinite(input.hit) &&
        Array.isArray(input.contents) &&
        input.contents.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io3(elem),
        ) &&
        "string" === typeof input.created_at;
      const $io2 = (input: any): boolean =>
        "string" === typeof input.id &&
        "number" === typeof input.hit &&
        Number.isFinite(input.hit) &&
        Array.isArray(input.contents) &&
        input.contents.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io3(elem),
        ) &&
        "string" === typeof input.created_at;
      const $io3 = (input: any): boolean =>
        "string" === typeof input.id &&
        "string" === typeof input.created_at &&
        "string" === typeof input.title &&
        "string" === typeof input.body &&
        Array.isArray(input.files) &&
        input.files.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io4(elem),
        );
      const $io4 = (input: any): boolean =>
        "string" === typeof input.name &&
        (null === input.extension || "string" === typeof input.extension) &&
        "string" === typeof input.url;
      const $io5 = (input: any): boolean =>
        "string" === typeof input.writer &&
        (null === input.answer ||
          ("object" === typeof input.answer &&
            null !== input.answer &&
            $io2(input.answer))) &&
        "string" === typeof input.id &&
        "number" === typeof input.hit &&
        Number.isFinite(input.hit) &&
        Array.isArray(input.contents) &&
        input.contents.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io6(elem),
        ) &&
        "string" === typeof input.created_at;
      const $io6 = (input: any): boolean =>
        "number" === typeof input.score &&
        Number.isFinite(input.score) &&
        "string" === typeof input.id &&
        "string" === typeof input.created_at &&
        "string" === typeof input.title &&
        "string" === typeof input.body &&
        Array.isArray(input.files) &&
        input.files.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io4(elem),
        );
      const $iu0 = (input: any): any =>
        (() => {
          if ($io5(input)) return $io5(input);
          if ($io1(input)) return $io1(input);
          return false;
        })();
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectGenericUnion => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((("object" === typeof input.value && null !== input.value) ||
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
          );
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
              $ao2(input.answer, _path + ".answer", true && _exceptionable)) ||
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
            ));
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
            ));
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
            ));
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
            ));
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
              $ao2(input.answer, _path + ".answer", true && _exceptionable)) ||
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
            ));
        const $ao6 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.score && Number.isFinite(input.score)) ||
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
            ));
        const $au0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          $ao5(input, _path, false && _exceptionable) ||
          $ao1(input, _path, false && _exceptionable) ||
          $guard(
            _exceptionable,
            {
              path: _path,
              expected:
                "(ObjectGenericUnion.ISaleReview | ObjectGenericUnion.ISaleQuestion)",
              value: input,
            },
            errorFactory,
          );
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
    return input;
  },
);
