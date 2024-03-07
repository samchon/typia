import typia from "typia";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ObjectAlias } from "../../../structures/ObjectAlias";
export const test_misc_clone_ObjectAlias = _test_misc_clone(
  "ObjectAlias",
)<ObjectAlias>(ObjectAlias)((input) =>
  ((input: ObjectAlias): import("typia").Resolved<ObjectAlias> => {
    const $cp0 = (input: any) =>
      input.map((elem: any) =>
        "object" === typeof elem && null !== elem ? $co0(elem) : (elem as any),
      );
    const $co0 = (input: any): any => ({
      id: input.id as any,
      email: input.email as any,
      name: input.name as any,
      sex: input.sex as any,
      age: input.age as any,
      dead: input.dead as any,
    });
    return Array.isArray(input) ? $cp0(input) : (input as any);
  })(input),
);
