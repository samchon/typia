import typia from "typia";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectInternal } from "../../../structures/ObjectInternal";
export const test_json_createIsStringify_ObjectInternal =
  _test_json_isStringify("ObjectInternal")<ObjectInternal>(ObjectInternal)(
    (input: ObjectInternal): string | null => {
      const is = (input: any): input is ObjectInternal => {
        return (
          "object" === typeof input &&
          null !== input &&
          "string" === typeof (input as any).id &&
          "string" === typeof (input as any).name
        );
      };
      const stringify = (input: ObjectInternal): string => {
        const $string = (typia.json.createIsStringify as any).string;
        return `{"id":${$string((input as any).id)},"name":${$string(
          (input as any).name,
        )}}`;
      };
      return is(input) ? stringify(input) : null;
    },
  );
