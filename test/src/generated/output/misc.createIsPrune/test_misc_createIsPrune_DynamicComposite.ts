import typia from "typia";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { DynamicComposite } from "../../../structures/DynamicComposite";
export const test_misc_createIsPrune_DynamicComposite = _test_misc_isPrune(
  "DynamicComposite",
)<DynamicComposite>(DynamicComposite)(
  (input: any): input is DynamicComposite => {
    const is = (input: any): input is DynamicComposite => {
      const $io0 = (input: any): boolean =>
        "string" === typeof input.id &&
        "string" === typeof input.name &&
        Object.keys(input).every((key: any) => {
          if (["id", "name"].some((prop: any) => key === prop)) return true;
          const value = input[key];
          if (undefined === value) return true;
          if ("number" === typeof Number(key) && Number.isFinite(Number(key)))
            return "number" === typeof value && Number.isFinite(value);
          if ("string" === typeof key && RegExp(/^prefix_(.*)/).test(key))
            return "string" === typeof value;
          if ("string" === typeof key && RegExp(/(.*)_postfix$/).test(key))
            return "string" === typeof value;
          if (
            "string" === typeof key &&
            RegExp(/^value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key)
          )
            return (
              "string" === typeof value ||
              ("number" === typeof value && Number.isFinite(value)) ||
              "boolean" === typeof value
            );
          if (
            "string" === typeof key &&
            RegExp(
              /^between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
            ).test(key)
          )
            return "boolean" === typeof value;
          return true;
        });
      return "object" === typeof input && null !== input && $io0(input);
    };
    const prune = (input: DynamicComposite): void => {
      const $po0 = (input: any): any => {
        Object.entries(input).forEach(([key, value]: any) => {
          if (undefined === value) return;
          if ("id" === key) return;
          if ("name" === key) return;
          if (RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key)) {
          }
          if (RegExp(/^(prefix_(.*))/).test(key)) {
          }
          if (RegExp(/((.*)_postfix)$/).test(key)) {
          }
          if (
            RegExp(/^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/).test(key)
          ) {
          }
          if (
            RegExp(
              /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
            ).test(key)
          ) {
          }
        });
        for (const key of Object.keys(input)) {
          if (
            "id" === key ||
            "name" === key ||
            RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key) ||
            RegExp(/^(prefix_(.*))/).test(key) ||
            RegExp(/((.*)_postfix)$/).test(key) ||
            RegExp(/^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/).test(key) ||
            RegExp(
              /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
            ).test(key)
          )
            continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
  },
);
