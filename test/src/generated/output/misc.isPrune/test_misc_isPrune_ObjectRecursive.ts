import typia from "typia";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";
export const test_misc_isPrune_ObjectRecursive = _test_misc_isPrune(
  "ObjectRecursive",
)<ObjectRecursive>(ObjectRecursive)((input) =>
  ((input: any): input is ObjectRecursive => {
    const is = (input: any): input is ObjectRecursive => {
      const $io0 = (input: any): boolean =>
        (null === input.parent ||
          ("object" === typeof input.parent &&
            null !== input.parent &&
            $io0(input.parent))) &&
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "string" === typeof input.code &&
        "string" === typeof input.name &&
        "number" === typeof input.sequence &&
        Number.isFinite(input.sequence) &&
        "object" === typeof input.created_at &&
        null !== input.created_at &&
        "number" === typeof (input.created_at as any).time &&
        Number.isFinite((input.created_at as any).time) &&
        "number" === typeof (input.created_at as any).zone &&
        Number.isFinite((input.created_at as any).zone);
      return "object" === typeof input && null !== input && $io0(input);
    };
    const prune = (input: ObjectRecursive): void => {
      const $io0 = (input: any): boolean =>
        (null === input.parent ||
          ("object" === typeof input.parent &&
            null !== input.parent &&
            $io0(input.parent))) &&
        "number" === typeof input.id &&
        "string" === typeof input.code &&
        "string" === typeof input.name &&
        "number" === typeof input.sequence &&
        "object" === typeof input.created_at &&
        null !== input.created_at &&
        $io1(input.created_at);
      const $io1 = (input: any): boolean =>
        "number" === typeof input.time && "number" === typeof input.zone;
      const $po0 = (input: any): any => {
        if ("object" === typeof input.parent && null !== input.parent)
          $po0(input.parent);
        if ("object" === typeof input.created_at && null !== input.created_at)
          $po1(input.created_at);
        for (const key of Object.keys(input)) {
          if (
            "parent" === key ||
            "id" === key ||
            "code" === key ||
            "name" === key ||
            "sequence" === key ||
            "created_at" === key
          )
            continue;
          delete input[key];
        }
      };
      const $po1 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("time" === key || "zone" === key) continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
  })(input),
);
