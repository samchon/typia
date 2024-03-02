import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { DynamicTag } from "../../../structures/DynamicTag";

export const test_misc_assertPruneCustom_DynamicTag = _test_misc_assertPrune(
  CustomGuardError,
)("DynamicTag")<DynamicTag>(DynamicTag)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): DynamicTag => {
    const assert = (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): DynamicTag => {
      const __is = (input: any): input is DynamicTag => {
        const $io0 = (input: any): boolean =>
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            if (
              "number" === typeof Number(key) &&
              0 <= Number(key) &&
              Number(key) < 10
            )
              return "bigint" === typeof value && BigInt(0) <= value;
            if (
              "string" === typeof key &&
              /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                key,
              )
            )
              return (
                "string" === typeof value &&
                /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
                  value,
                )
              );
            return true;
          });
        return (
          "object" === typeof input &&
          null !== input &&
          false === Array.isArray(input) &&
          $io0(input)
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is DynamicTag => {
          const $guard = (typia.misc.assertPrune as any).guard;
          const $join = (typia.misc.assertPrune as any).join;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              const value = input[key];
              if (undefined === value) return true;
              if (
                "number" === typeof Number(key) &&
                0 <= Number(key) &&
                Number(key) < 10
              )
                return (
                  ("bigint" === typeof value &&
                    (BigInt(0) <= value ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + $join(key),
                          expected: 'bigint & Type<"uint64">',
                          value: value,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + $join(key),
                      expected: '(bigint & Type<"uint64">)',
                      value: value,
                    },
                    errorFactory,
                  )
                );
              if (
                "string" === typeof key &&
                /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                  key,
                )
              )
                return (
                  ("string" === typeof value &&
                    (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
                      value,
                    ) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + $join(key),
                          expected: 'string & Format<"email">',
                          value: value,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + $join(key),
                      expected: '(string & Format<"email">)',
                      value: value,
                    },
                    errorFactory,
                  )
                );
              return true;
            });
          return (
            ((("object" === typeof input &&
              null !== input &&
              false === Array.isArray(input)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "DynamicTag",
                  value: input,
                },
                errorFactory,
              )) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "DynamicTag",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    };
    const prune = (input: DynamicTag): void => {
      const $po0 = (input: any): any => {
        Object.entries(input).forEach(([key, value]: any) => {
          if (undefined === value) return;
          if (RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key)) {
          }
          if (RegExp(/(.*)/).test(key)) {
          }
        });
        for (const key of Object.keys(input)) {
          if (
            RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key) ||
            RegExp(/(.*)/).test(key)
          )
            continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    assert(input, errorFactory);
    prune(input);
    return input;
  })(input, (p) => new CustomGuardError(p)),
);
