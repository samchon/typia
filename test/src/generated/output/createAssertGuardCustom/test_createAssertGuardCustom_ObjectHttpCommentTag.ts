import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";

export const test_createAssertGuardCustom_ObjectHttpCommentTag =
  _test_assertGuard(CustomGuardError)(
    "ObjectHttpCommentTag",
  )<ObjectHttpCommentTag>(ObjectHttpCommentTag)(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): asserts input is ObjectHttpCommentTag => {
      const __is = (input: any): input is ObjectHttpCommentTag => {
        const $io0 = (input: any): boolean =>
          "number" === typeof input.int &&
          Math.floor(input.int) === input.int &&
          -2147483648 <= input.int &&
          input.int <= 2147483647 &&
          "bigint" === typeof input.uint64 &&
          BigInt(0) <= input.uint64 &&
          "string" === typeof input.uuid &&
          /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
            input.uuid,
          ) &&
          Array.isArray(input.items) &&
          10 <= input.items.length &&
          input.items.length <= 100 &&
          input.items.every(
            (elem: any) => "number" === typeof elem && Number.isFinite(elem),
          );
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ObjectHttpCommentTag => {
          const $guard = (typia.createAssertGuard as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.int &&
              ((Math.floor(input.int) === input.int &&
                -2147483648 <= input.int &&
                input.int <= 2147483647) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".int",
                    expected: 'number & Type<"int32">',
                    value: input.int,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".int",
                  expected: '(number & Type<"int32">)',
                  value: input.int,
                },
                errorFactory,
              )) &&
            (("bigint" === typeof input.uint64 &&
              (BigInt(0) <= input.uint64 ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".uint64",
                    expected: 'bigint & Type<"uint64">',
                    value: input.uint64,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".uint64",
                  expected: '(bigint & Type<"uint64">)',
                  value: input.uint64,
                },
                errorFactory,
              )) &&
            (("string" === typeof input.uuid &&
              (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                input.uuid,
              ) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".uuid",
                    expected: 'string & Format<"uuid">',
                    value: input.uuid,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".uuid",
                  expected: '(string & Format<"uuid">)',
                  value: input.uuid,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.items) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".items",
                  expected: "(Array<number> & MinItems<10> & MaxItems<100>)",
                  value: input.items,
                },
                errorFactory,
              )) &&
              (10 <= input.items.length ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".items",
                    expected: "Array<> & MinItems<10>",
                    value: input.items,
                  },
                  errorFactory,
                )) &&
              (input.items.length <= 100 ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".items",
                    expected: "Array<> & MaxItems<100>",
                    value: input.items,
                  },
                  errorFactory,
                )) &&
              input.items.every(
                (elem: any, _index1: number) =>
                  ("number" === typeof elem && Number.isFinite(elem)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".items[" + _index1 + "]",
                      expected: "number",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".items",
                  expected: "(Array<number> & MinItems<10> & MaxItems<100>)",
                  value: input.items,
                },
                errorFactory,
              ));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectHttpCommentTag",
                  value: input,
                },
                errorFactory,
              )) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectHttpCommentTag",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
    },
  );
