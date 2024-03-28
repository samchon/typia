import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../../internal/_test_functional_assertFunction";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_functional_assertFunction_ObjectJsonTag =
  _test_functional_assertFunction(TypeGuardError)("ObjectJsonTag")(
    ObjectJsonTag,
  )(
    (p: (input: ObjectJsonTag) => ObjectJsonTag) =>
      (input: ObjectJsonTag): ObjectJsonTag => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertFunction as any).errorFactory;
        ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.parameters[0]")
                : undefined,
            }),
        ): ObjectJsonTag => {
          const __is = (input: any): input is ObjectJsonTag => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" === typeof (input as any).vulnerable &&
              "string" === typeof (input as any).description &&
              "string" === typeof (input as any).title &&
              "string" === typeof (input as any).complicate_title
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectJsonTag => {
              const $guard = (typia.functional.assertFunction as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("string" === typeof input.vulnerable ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".vulnerable",
                      expected: "string",
                      value: input.vulnerable,
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input.description ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".description",
                      expected: "string",
                      value: input.description,
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
                ("string" === typeof input.complicate_title ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".complicate_title",
                      expected: "string",
                      value: input.complicate_title,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ObjectJsonTag",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectJsonTag",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(input);
        return ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.return")
                : undefined,
            }),
        ): ObjectJsonTag => {
          const __is = (input: any): input is ObjectJsonTag => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" === typeof (input as any).vulnerable &&
              "string" === typeof (input as any).description &&
              "string" === typeof (input as any).title &&
              "string" === typeof (input as any).complicate_title
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectJsonTag => {
              const $guard = (typia.functional.assertFunction as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("string" === typeof input.vulnerable ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".vulnerable",
                      expected: "string",
                      value: input.vulnerable,
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input.description ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".description",
                      expected: "string",
                      value: input.description,
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
                ("string" === typeof input.complicate_title ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".complicate_title",
                      expected: "string",
                      value: input.complicate_title,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ObjectJsonTag",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectJsonTag",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(p(input));
      },
  );
