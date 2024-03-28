import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_misc_createAssertPrune_ObjectAlias = _test_misc_assertPrune(
  TypeGuardError,
)("ObjectAlias")<ObjectAlias>(ObjectAlias)(
  (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ObjectAlias => {
    const assert = (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): ObjectAlias => {
      const __is = (input: any): input is ObjectAlias => {
        const $io0 = (input: any): boolean =>
          (null === input.id || "string" === typeof input.id) &&
          "string" === typeof input.email &&
          "string" === typeof input.name &&
          (null === input.sex ||
            1 === input.sex ||
            2 === input.sex ||
            "female" === input.sex ||
            "male" === input.sex) &&
          (null === input.age ||
            ("number" === typeof input.age && Number.isFinite(input.age))) &&
          (null === input.dead || "boolean" === typeof input.dead);
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io0(elem),
          )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ObjectAlias => {
          const $guard = (typia.misc.createAssertPrune as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (null === input.id ||
              "string" === typeof input.id ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".id",
                  expected: "(null | string)",
                  value: input.id,
                },
                errorFactory,
              )) &&
            ("string" === typeof input.email ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".email",
                  expected: "string",
                  value: input.email,
                },
                errorFactory,
              )) &&
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
            (null === input.sex ||
              1 === input.sex ||
              2 === input.sex ||
              "female" === input.sex ||
              "male" === input.sex ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".sex",
                  expected: '("female" | "male" | 1 | 2 | null)',
                  value: input.sex,
                },
                errorFactory,
              )) &&
            (null === input.age ||
              ("number" === typeof input.age && Number.isFinite(input.age)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".age",
                  expected: "(null | number)",
                  value: input.age,
                },
                errorFactory,
              )) &&
            (null === input.dead ||
              "boolean" === typeof input.dead ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".dead",
                  expected: "(boolean | null)",
                  value: input.dead,
                },
                errorFactory,
              ));
          return (
            ((Array.isArray(input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectAlias",
                  value: input,
                },
                errorFactory,
              )) &&
              input.every(
                (elem: any, _index1: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      true,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected: "ObjectAlias.IMember",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                  $guard(
                    true,
                    {
                      path: _path + "[" + _index1 + "]",
                      expected: "ObjectAlias.IMember",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectAlias",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    };
    const prune = (input: ObjectAlias): void => {
      const $pp0 = (input: any) =>
        input.forEach((elem: any) => {
          if ("object" === typeof elem && null !== elem) $po0(elem);
        });
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if (
            "id" === key ||
            "email" === key ||
            "name" === key ||
            "sex" === key ||
            "age" === key ||
            "dead" === key
          )
            continue;
          delete input[key];
        }
      };
      if (Array.isArray(input)) $pp0(input);
    };
    assert(input, errorFactory);
    prune(input);
    return input;
  },
);
