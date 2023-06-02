import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { DynamicJsonValue } from "../../../structures/DynamicJsonValue";

export const test_createIsStringify_DynamicJsonValue = _test_isStringify(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input: DynamicJsonValue): string | null => {
        const is: any = (input: any): input is DynamicJsonValue => {
            const $join: any = (typia.createIsStringify as any).join;
            const $io0: any = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value: any = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            null === value ||
                            undefined === value ||
                            "string" === typeof value ||
                            ("number" === typeof value &&
                                Number.isFinite(value)) ||
                            "boolean" === typeof value ||
                            (Array.isArray(value) && $ia0(value)) ||
                            ("object" === typeof value &&
                                null !== value &&
                                false === Array.isArray(value) &&
                                $io0(value))
                        );
                    return true;
                });
            const $ia0: any = (input: any): any =>
                input.every(
                    (elem: any) =>
                        undefined !== elem &&
                        (null === elem ||
                            "string" === typeof elem ||
                            ("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                            "boolean" === typeof elem ||
                            (Array.isArray(elem) && $ia0(elem)) ||
                            ("object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $io0(elem))),
                );
            return (
                undefined !== input &&
                (null === input ||
                    "string" === typeof input ||
                    ("number" === typeof input && Number.isFinite(input)) ||
                    "boolean" === typeof input ||
                    (Array.isArray(input) && $ia0(input)) ||
                    ("object" === typeof input &&
                        null !== input &&
                        false === Array.isArray(input) &&
                        $io0(input)))
            );
        };
        const stringify: any = (input: DynamicJsonValue): string => {
            const $io0: any = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value: any = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            null === value ||
                            undefined === value ||
                            "string" === typeof value ||
                            "number" === typeof value ||
                            "boolean" === typeof value ||
                            (Array.isArray(value) && $ia0(value)) ||
                            ("object" === typeof value &&
                                null !== value &&
                                false === Array.isArray(value) &&
                                $io0(value))
                        );
                    return true;
                });
            const $ia0: any = (input: any): any =>
                input.every(
                    (elem: any) =>
                        undefined !== elem &&
                        (null === elem ||
                            "string" === typeof elem ||
                            "number" === typeof elem ||
                            "boolean" === typeof elem ||
                            (Array.isArray(elem) && $ia0(elem)) ||
                            ("object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $io0(elem))),
                );
            const $string: any = (typia.createIsStringify as any).string;
            const $number: any = (typia.createIsStringify as any).number;
            const $throws: any = (typia.createIsStringify as any).throws;
            const $join: any = (typia.createIsStringify as any).join;
            const $sp0: any = (input: any) => $sa0(input);
            const $so0: any = (input: any): any =>
                `{${Object.entries(input)
                    .map(([key, value]: [string, any]) => {
                        if (undefined === value) return "";
                        return `${JSON.stringify(key)}:${
                            undefined !== value
                                ? null !== value
                                    ? (() => {
                                          if ("string" === typeof value)
                                              return $string(value);
                                          if ("number" === typeof value)
                                              return $number(value);
                                          if ("boolean" === typeof value)
                                              return value;
                                          if (Array.isArray(value))
                                              return $sp0(value);
                                          if (
                                              "object" === typeof value &&
                                              null !== value &&
                                              false === Array.isArray(value)
                                          )
                                              return $so0(value);
                                          $throws({
                                              expected:
                                                  "(DynamicJsonValue.JsonArray | DynamicJsonValue.JsonObject | boolean | null | number | string | undefined)",
                                              value: value,
                                          });
                                      })()
                                    : "null"
                                : undefined
                        }`;
                    })
                    .filter((str: any) => "" !== str)
                    .join(",")}}`;
            const $sa0: any = (input: any): any =>
                `[${input
                    .map((elem: any) =>
                        null !== elem
                            ? (() => {
                                  if ("string" === typeof elem)
                                      return $string(elem);
                                  if ("number" === typeof elem)
                                      return $number(elem);
                                  if ("boolean" === typeof elem) return elem;
                                  if (Array.isArray(elem)) return $sp0(elem);
                                  if (
                                      "object" === typeof elem &&
                                      null !== elem &&
                                      false === Array.isArray(elem)
                                  )
                                      return $so0(elem);
                                  $throws({
                                      expected:
                                          "(DynamicJsonValue.JsonArray | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                                      value: elem,
                                  });
                              })()
                            : "null",
                    )
                    .join(",")}]`;
            return null !== input
                ? (() => {
                      if ("string" === typeof input) return $string(input);
                      if ("number" === typeof input)
                          return $number(input).toString();
                      if ("boolean" === typeof input) return input.toString();
                      if (Array.isArray(input)) return $sp0(input);
                      if (
                          "object" === typeof input &&
                          null !== input &&
                          false === Array.isArray(input)
                      )
                          return $so0(input);
                      $throws({
                          expected:
                              "(DynamicJsonValue.JsonArray | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                          value: input,
                      });
                  })()
                : "null";
        };
        return is(input) ? stringify(input) : null;
    },
    DynamicJsonValue.SPOILERS,
);
