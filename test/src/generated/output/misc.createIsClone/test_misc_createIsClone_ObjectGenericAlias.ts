import typia from "typia";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
export const test_misc_createIsClone_ObjectGenericAlias = _test_misc_isClone(
  "ObjectGenericAlias",
)<ObjectGenericAlias>(ObjectGenericAlias)(
  (input: any): import("typia").Resolved<ObjectGenericAlias> | null => {
    const is = (input: any): input is ObjectGenericAlias => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).value
      );
    };
    const clone = (
      input: ObjectGenericAlias,
    ): import("typia").Resolved<ObjectGenericAlias> => {
      const $co0 = (input: any): any => ({
        value: input.value as any,
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  },
);
