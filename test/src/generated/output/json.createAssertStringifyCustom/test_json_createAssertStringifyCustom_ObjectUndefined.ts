import typia from "typia";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_json_createAssertStringifyCustom_ObjectUndefined =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectUndefined",
  )<ObjectUndefined>(ObjectUndefined)(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): string => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ObjectUndefined => {
        const __is = (input: any): input is ObjectUndefined => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.name &&
            (undefined === input.professor ||
              "string" === typeof input.professor ||
              ("number" === typeof input.professor &&
                Number.isFinite(input.professor))) &&
            (undefined === input.classroom ||
              ("object" === typeof input.classroom &&
                null !== input.classroom &&
                $io1(input.classroom))) &&
            (undefined === input.grade ||
              ("number" === typeof input.grade &&
                Number.isFinite(input.grade))) &&
            null !== input.nothing &&
            undefined === input.nothing &&
            true &&
            null !== input.never &&
            undefined === input.never;
          const $io1 = (input: any): boolean =>
            "string" === typeof input.id && "string" === typeof input.name;
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
          ): input is ObjectUndefined => {
            const $guard = (typia.json.createAssertStringify as any).guard;
            const $ao0 = (
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
              (undefined === input.professor ||
                "string" === typeof input.professor ||
                ("number" === typeof input.professor &&
                  Number.isFinite(input.professor)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".professor",
                    expected: "(number | string | undefined)",
                    value: input.professor,
                  },
                  errorFactory,
                )) &&
              (undefined === input.classroom ||
                ((("object" === typeof input.classroom &&
                  null !== input.classroom) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".classroom",
                      expected: "(ObjectUndefined.IClassroom | undefined)",
                      value: input.classroom,
                    },
                    errorFactory,
                  )) &&
                  $ao1(
                    input.classroom,
                    _path + ".classroom",
                    true && _exceptionable,
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".classroom",
                    expected: "(ObjectUndefined.IClassroom | undefined)",
                    value: input.classroom,
                  },
                  errorFactory,
                )) &&
              (undefined === input.grade ||
                ("number" === typeof input.grade &&
                  Number.isFinite(input.grade)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".grade",
                    expected: "(number | undefined)",
                    value: input.grade,
                  },
                  errorFactory,
                )) &&
              (null !== input.nothing ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".nothing",
                    expected: "undefined",
                    value: input.nothing,
                  },
                  errorFactory,
                )) &&
              (undefined === input.nothing ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".nothing",
                    expected: "undefined",
                    value: input.nothing,
                  },
                  errorFactory,
                )) &&
              true &&
              (null !== input.never ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".never",
                    expected: "undefined",
                    value: input.never,
                  },
                  errorFactory,
                )) &&
              (undefined === input.never ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".never",
                    expected: "undefined",
                    value: input.never,
                  },
                  errorFactory,
                ));
            const $ao1 = (
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
              ("string" === typeof input.name ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name,
                  },
                  errorFactory,
                ));
            return (
              ((Array.isArray(input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectUndefined",
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
                          expected: "ObjectUndefined.ILecture",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                    $guard(
                      true,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected: "ObjectUndefined.ILecture",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectUndefined",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: ObjectUndefined): string => {
        const $io1 = (input: any): boolean =>
          "string" === typeof input.id && "string" === typeof input.name;
        const $string = (typia.json.createAssertStringify as any).string;
        const $number = (typia.json.createAssertStringify as any).number;
        const $throws = (typia.json.createAssertStringify as any).throws;
        const $so0 = (input: any): any =>
          `{${
            undefined === input.professor
              ? ""
              : `"professor":${
                  undefined !== input.professor
                    ? (() => {
                        if ("string" === typeof input.professor)
                          return $string(input.professor);
                        if ("number" === typeof input.professor)
                          return $number(input.professor);
                        $throws({
                          expected: "(number | string | undefined)",
                          value: input.professor,
                        });
                      })()
                    : undefined
                },`
          }${undefined === input.classroom ? "" : `"classroom":${undefined !== input.classroom ? `{"id":${$string((input.classroom as any).id)},"name":${$string((input.classroom as any).name)}}` : undefined},`}${undefined === input.grade ? "" : `"grade":${undefined !== input.grade ? $number(input.grade) : undefined},`}${undefined === input.unknown || "function" === typeof input.unknown ? "" : `"unknown":${undefined !== input.unknown ? JSON.stringify(input.unknown) : undefined},`}"name":${$string(input.name)}}`;
        return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
      };
      return stringify(assert(input, errorFactory));
    },
  );
