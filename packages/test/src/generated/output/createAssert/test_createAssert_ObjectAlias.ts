import typia from "typia";

import { _test_assert } from "../../../internal/_test_assert";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_createAssert_ObjectAlias = _test_assert(
  "ObjectAlias",
)<ObjectAlias>(ObjectAlias)((input: any): ObjectAlias => {
  const __is = (input: any): input is ObjectAlias => {
    const $io0 = (input: any): boolean =>
      (null === input.id || "string" === typeof input.id) &&
      "string" === typeof input.email &&
      "string" === typeof input.name &&
      (null === input.sex ||
        2 === input.sex ||
        1 === input.sex ||
        "male" === input.sex ||
        "female" === input.sex) &&
      (null === input.age ||
        ("number" === typeof input.age && Number.isFinite(input.age))) &&
      (null === input.dead || "boolean" === typeof input.dead);
    return (
      Array.isArray(input) &&
      input.every(
        (elem: any) => "object" === typeof elem && null !== elem && $io0(elem),
      )
    );
  };
  if (false === __is(input))
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is ObjectAlias => {
      const $guard = (typia.createAssert as any).guard;
      const $ao0 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        (null === input.id ||
          "string" === typeof input.id ||
          $guard(_exceptionable, {
            path: _path + ".id",
            expected: "(null | string)",
            value: input.id,
          })) &&
        ("string" === typeof input.email ||
          $guard(_exceptionable, {
            path: _path + ".email",
            expected: "string",
            value: input.email,
          })) &&
        ("string" === typeof input.name ||
          $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name,
          })) &&
        (null === input.sex ||
          2 === input.sex ||
          1 === input.sex ||
          "male" === input.sex ||
          "female" === input.sex ||
          $guard(_exceptionable, {
            path: _path + ".sex",
            expected: '("female" | "male" | 1 | 2 | null)',
            value: input.sex,
          })) &&
        (null === input.age ||
          ("number" === typeof input.age && Number.isFinite(input.age)) ||
          $guard(_exceptionable, {
            path: _path + ".age",
            expected: "(null | number)",
            value: input.age,
          })) &&
        (null === input.dead ||
          "boolean" === typeof input.dead ||
          $guard(_exceptionable, {
            path: _path + ".dead",
            expected: "(boolean | null)",
            value: input.dead,
          }));
      return (
        ((Array.isArray(input) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectAlias",
            value: input,
          })) &&
          input.every(
            (elem: any, _index1: number) =>
              ((("object" === typeof elem && null !== elem) ||
                $guard(true, {
                  path: _path + "[" + _index1 + "]",
                  expected: "ObjectAlias.IMember",
                  value: elem,
                })) &&
                $ao0(elem, _path + "[" + _index1 + "]", true)) ||
              $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "ObjectAlias.IMember",
                value: elem,
              }),
          )) ||
        $guard(true, {
          path: _path + "",
          expected: "ObjectAlias",
          value: input,
        })
      );
    })(input, "$input", true);
  return input;
});
