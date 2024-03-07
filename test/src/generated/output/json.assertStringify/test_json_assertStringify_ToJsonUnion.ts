import typia from "typia";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";
import { TypeGuardError } from "typia";
export const test_json_assertStringify_ToJsonUnion = _test_json_assertStringify(
  TypeGuardError,
)("ToJsonUnion")<ToJsonUnion>(ToJsonUnion)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): string => {
    const assert = (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): ToJsonUnion => {
      const __is = (input: any): input is ToJsonUnion => {
        const $io0 = (input: any): boolean =>
          "number" === typeof input.id &&
          Number.isFinite(input.id) &&
          "string" === typeof input.mobile &&
          "string" === typeof input.name;
        const $io1 = (input: any): boolean => true;
        const $io2 = (input: any): boolean => true;
        const $io3 = (input: any): boolean => true;
        const $iu0 = (input: any): any =>
          (() => {
            if (undefined !== input.id) return $io0(input);
            else
              return (() => {
                if ($io3(input)) return $io3(input);
                if ($io2(input)) return $io2(input);
                if ($io1(input)) return $io1(input);
                return false;
              })();
          })();
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any) =>
              null !== elem &&
              undefined !== elem &&
              ("string" === typeof elem ||
                ("number" === typeof elem && Number.isFinite(elem)) ||
                ("object" === typeof elem && null !== elem && $iu0(elem))),
          )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ToJsonUnion => {
          const $guard = (typia.json.assertStringify as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.id && Number.isFinite(input.id)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".id",
                  expected: "number",
                  value: input.id,
                },
                errorFactory,
              )) &&
            ("string" === typeof input.mobile ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".mobile",
                  expected: "string",
                  value: input.mobile,
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
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            true ||
            $guard(
              _exceptionable,
              {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON,
              },
              errorFactory,
            );
          const $ao2 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            true ||
            $guard(
              _exceptionable,
              {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON,
              },
              errorFactory,
            );
          const $ao3 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            true ||
            $guard(
              _exceptionable,
              {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON,
              },
              errorFactory,
            );
          const $au0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): any =>
            (() => {
              if (undefined !== input.id)
                return $ao0(input, _path, true && _exceptionable);
              else
                return (
                  $ao3(input, _path, false && _exceptionable) ||
                  $ao2(input, _path, false && _exceptionable) ||
                  $ao1(input, _path, false && _exceptionable) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path,
                      expected:
                        "(ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<boolean>)",
                      value: input,
                    },
                    errorFactory,
                  )
                );
            })();
          return (
            ((Array.isArray(input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ToJsonUnion",
                  value: input,
                },
                errorFactory,
              )) &&
              input.every(
                (elem: any, _index1: number) =>
                  (null !== elem ||
                    $guard(
                      true,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                  (undefined !== elem ||
                    $guard(
                      true,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                  ("string" === typeof elem ||
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(
                        true,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      $au0(elem, _path + "[" + _index1 + "]", true)) ||
                    $guard(
                      true,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                        value: elem,
                      },
                      errorFactory,
                    )),
              )) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ToJsonUnion",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    };
    const stringify = (input: ToJsonUnion): string => {
      const $io0 = (input: any): boolean =>
        "number" === typeof input.id &&
        "string" === typeof input.mobile &&
        "string" === typeof input.name;
      const $io4 = (input: any): boolean =>
        "string" === typeof input.manufacturer &&
        "string" === typeof input.brand &&
        "string" === typeof input.name;
      const $throws = (typia.json.assertStringify as any).throws;
      const $string = (typia.json.assertStringify as any).string;
      const $number = (typia.json.assertStringify as any).number;
      const $so0 = (input: any): any =>
        `{"id":${$number(input.id)},"mobile":${$string(
          input.mobile,
        )},"name":${$string(input.name)}}`;
      const $so4 = (input: any): any =>
        `{"manufacturer":${$string(input.manufacturer)},"brand":${$string(
          input.brand,
        )},"name":${$string(input.name)}}`;
      const $su0 = (input: any): any =>
        (() => {
          if (undefined !== input.id) return $so0(input);
          else if (undefined !== input.manufacturer) return $so4(input);
          else
            $throws({
              expected: "(ToJsonUnion.ICitizen | ToJsonUnion.IProduct)",
              value: input,
            });
        })();
      return `[${input
        .map((elem: any) =>
          (() => {
            if ("object" === typeof elem && "function" === typeof elem.toJSON)
              return (() => {
                if ("boolean" === typeof elem.toJSON()) return elem.toJSON();
                if ("object" === typeof elem.toJSON() && null !== elem.toJSON())
                  return $su0(elem.toJSON());
                $throws({
                  expected:
                    "(ToJsonUnion.ICitizen | ToJsonUnion.IProduct | boolean)",
                  value: elem.toJSON(),
                });
              })();
            if ("string" === typeof elem) return $string(elem);
            if ("number" === typeof elem) return $number(elem);
            if ("object" === typeof elem && null !== elem)
              return `{"id":${$number((elem as any).id)},"mobile":${$string(
                (elem as any).mobile,
              )},"name":${$string((elem as any).name)}}`;
            $throws({
              expected:
                "((ToJsonUnion.ICitizen | ToJsonUnion.IProduct | boolean) | ToJsonUnion.ICitizen | number | string)",
              value: elem,
            });
          })(),
        )
        .join(",")}]`;
    };
    return stringify(assert(input, errorFactory));
  })(input),
);
