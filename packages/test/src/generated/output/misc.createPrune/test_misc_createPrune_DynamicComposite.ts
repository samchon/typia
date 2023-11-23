import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_misc_createPrune_DynamicComposite = _test_misc_prune(
  "DynamicComposite",
)<DynamicComposite>(DynamicComposite)((input: DynamicComposite): void => {
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
      if (RegExp(/^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/).test(key)) {
      }
      if (
        RegExp(/^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/).test(
          key,
        )
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
        RegExp(/^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/).test(
          key,
        )
      )
        continue;
      delete input[key];
    }
  };
  if ("object" === typeof input && null !== input) $po0(input);
});
