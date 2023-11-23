import typia from "typia";

import { _test_validate } from "../../../internal/_test_validate";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_createValidate_ObjectAlias = _test_validate(
  "ObjectAlias",
)<ObjectAlias>(ObjectAlias)((input: any): typia.IValidation<ObjectAlias> => {
  const errors = [] as any[];
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
  if (false === __is(input)) {
    const $report = (typia.createValidate as any).report(errors);
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is ObjectAlias => {
      const $vo0 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        [
          null === input.id ||
            "string" === typeof input.id ||
            $report(_exceptionable, {
              path: _path + ".id",
              expected: "(null | string)",
              value: input.id,
            }),
          "string" === typeof input.email ||
            $report(_exceptionable, {
              path: _path + ".email",
              expected: "string",
              value: input.email,
            }),
          "string" === typeof input.name ||
            $report(_exceptionable, {
              path: _path + ".name",
              expected: "string",
              value: input.name,
            }),
          null === input.sex ||
            2 === input.sex ||
            1 === input.sex ||
            "male" === input.sex ||
            "female" === input.sex ||
            $report(_exceptionable, {
              path: _path + ".sex",
              expected: '("female" | "male" | 1 | 2 | null)',
              value: input.sex,
            }),
          null === input.age ||
            ("number" === typeof input.age && Number.isFinite(input.age)) ||
            $report(_exceptionable, {
              path: _path + ".age",
              expected: "(null | number)",
              value: input.age,
            }),
          null === input.dead ||
            "boolean" === typeof input.dead ||
            $report(_exceptionable, {
              path: _path + ".dead",
              expected: "(boolean | null)",
              value: input.dead,
            }),
        ].every((flag: boolean) => flag);
      return (
        ((Array.isArray(input) ||
          $report(true, {
            path: _path + "",
            expected: "ObjectAlias",
            value: input,
          })) &&
          input
            .map(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $report(true, {
                    path: _path + "[" + _index1 + "]",
                    expected: "ObjectAlias.IMember",
                    value: elem,
                  })) &&
                  $vo0(elem, _path + "[" + _index1 + "]", true)) ||
                $report(true, {
                  path: _path + "[" + _index1 + "]",
                  expected: "ObjectAlias.IMember",
                  value: elem,
                }),
            )
            .every((flag: boolean) => flag)) ||
        $report(true, {
          path: _path + "",
          expected: "ObjectAlias",
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
});
