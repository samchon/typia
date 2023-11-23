import typia from "typia";

import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_misc_createValidatePrune_ObjectPartial =
  _test_misc_validatePrune("ObjectPartial")<ObjectPartial>(ObjectPartial)(
    (input: any): typia.IValidation<ObjectPartial> => {
      const validate = (input: any): typia.IValidation<ObjectPartial> => {
        const errors = [] as any[];
        const __is = (input: any): input is ObjectPartial => {
          const $io0 = (input: any): boolean =>
            (undefined === input.boolean ||
              "boolean" === typeof input.boolean) &&
            (undefined === input.number ||
              ("number" === typeof input.number &&
                Number.isFinite(input.number))) &&
            (undefined === input.string || "string" === typeof input.string) &&
            (undefined === input.array ||
              (Array.isArray(input.array) &&
                input.array.every(
                  (elem: any) =>
                    "number" === typeof elem && Number.isFinite(elem),
                ))) &&
            (null === input.object ||
              undefined === input.object ||
              ("object" === typeof input.object &&
                null !== input.object &&
                $io1(input.object)));
          const $io1 = (input: any): boolean =>
            "boolean" === typeof input.boolean &&
            "number" === typeof input.number &&
            Number.isFinite(input.number) &&
            "string" === typeof input.string &&
            Array.isArray(input.array) &&
            input.array.every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            ) &&
            (null === input.object ||
              ("object" === typeof input.object &&
                null !== input.object &&
                $io1(input.object)));
          return (
            "object" === typeof input &&
            null !== input &&
            false === Array.isArray(input) &&
            $io0(input)
          );
        };
        if (false === __is(input)) {
          const $report = (typia.misc.createValidatePrune as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectPartial => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                undefined === input.boolean ||
                  "boolean" === typeof input.boolean ||
                  $report(_exceptionable, {
                    path: _path + ".boolean",
                    expected: "(boolean | undefined)",
                    value: input.boolean,
                  }),
                undefined === input.number ||
                  ("number" === typeof input.number &&
                    Number.isFinite(input.number)) ||
                  $report(_exceptionable, {
                    path: _path + ".number",
                    expected: "(number | undefined)",
                    value: input.number,
                  }),
                undefined === input.string ||
                  "string" === typeof input.string ||
                  $report(_exceptionable, {
                    path: _path + ".string",
                    expected: "(string | undefined)",
                    value: input.string,
                  }),
                undefined === input.array ||
                  ((Array.isArray(input.array) ||
                    $report(_exceptionable, {
                      path: _path + ".array",
                      expected: "(Array<number> | undefined)",
                      value: input.array,
                    })) &&
                    input.array
                      .map(
                        (elem: any, _index1: number) =>
                          ("number" === typeof elem && Number.isFinite(elem)) ||
                          $report(_exceptionable, {
                            path: _path + ".array[" + _index1 + "]",
                            expected: "number",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".array",
                    expected: "(Array<number> | undefined)",
                    value: input.array,
                  }),
                null === input.object ||
                  undefined === input.object ||
                  ((("object" === typeof input.object &&
                    null !== input.object) ||
                    $report(_exceptionable, {
                      path: _path + ".object",
                      expected: "(ObjectPartial.IBase | null | undefined)",
                      value: input.object,
                    })) &&
                    $vo1(
                      input.object,
                      _path + ".object",
                      true && _exceptionable,
                    )) ||
                  $report(_exceptionable, {
                    path: _path + ".object",
                    expected: "(ObjectPartial.IBase | null | undefined)",
                    value: input.object,
                  }),
              ].every((flag: boolean) => flag);
            const $vo1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "boolean" === typeof input.boolean ||
                  $report(_exceptionable, {
                    path: _path + ".boolean",
                    expected: "boolean",
                    value: input.boolean,
                  }),
                ("number" === typeof input.number &&
                  Number.isFinite(input.number)) ||
                  $report(_exceptionable, {
                    path: _path + ".number",
                    expected: "number",
                    value: input.number,
                  }),
                "string" === typeof input.string ||
                  $report(_exceptionable, {
                    path: _path + ".string",
                    expected: "string",
                    value: input.string,
                  }),
                ((Array.isArray(input.array) ||
                  $report(_exceptionable, {
                    path: _path + ".array",
                    expected: "Array<number>",
                    value: input.array,
                  })) &&
                  input.array
                    .map(
                      (elem: any, _index2: number) =>
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        $report(_exceptionable, {
                          path: _path + ".array[" + _index2 + "]",
                          expected: "number",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".array",
                    expected: "Array<number>",
                    value: input.array,
                  }),
                null === input.object ||
                  ((("object" === typeof input.object &&
                    null !== input.object) ||
                    $report(_exceptionable, {
                      path: _path + ".object",
                      expected: "(ObjectPartial.IBase | null)",
                      value: input.object,
                    })) &&
                    $vo1(
                      input.object,
                      _path + ".object",
                      true && _exceptionable,
                    )) ||
                  $report(_exceptionable, {
                    path: _path + ".object",
                    expected: "(ObjectPartial.IBase | null)",
                    value: input.object,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input &&
                null !== input &&
                false === Array.isArray(input)) ||
                $report(true, {
                  path: _path + "",
                  expected: "Partial<ObjectPartial.IBase>",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "Partial<ObjectPartial.IBase>",
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
      };
      const prune = (input: ObjectPartial): void => {
        const $io1 = (input: any): boolean =>
          "boolean" === typeof input.boolean &&
          "number" === typeof input.number &&
          "string" === typeof input.string &&
          Array.isArray(input.array) &&
          input.array.every((elem: any) => "number" === typeof elem) &&
          (null === input.object ||
            ("object" === typeof input.object &&
              null !== input.object &&
              $io1(input.object)));
        const $po0 = (input: any): any => {
          if ("object" === typeof input.object && null !== input.object)
            $po1(input.object);
          for (const key of Object.keys(input)) {
            if (
              "boolean" === key ||
              "number" === key ||
              "string" === key ||
              "array" === key ||
              "object" === key
            )
              continue;
            delete input[key];
          }
        };
        const $po1 = (input: any): any => {
          if ("object" === typeof input.object && null !== input.object)
            $po1(input.object);
          for (const key of Object.keys(input)) {
            if (
              "boolean" === key ||
              "number" === key ||
              "string" === key ||
              "array" === key ||
              "object" === key
            )
              continue;
            delete input[key];
          }
        };
        if ("object" === typeof input && null !== input) $po0(input);
      };
      const output = validate(input);
      if (output.success) prune(input);
      return output;
    },
  );
