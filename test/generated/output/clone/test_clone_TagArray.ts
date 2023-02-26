import typia from "../../../../src";
import { TagArray } from "../../../structures/TagArray";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_TagArray = _test_clone(
    "TagArray",
    TagArray.generate,
    (input) =>
        ((
            input: Array<TagArray.Type>,
        ): typia.Primitive<Array<TagArray.Type>> => {
            const $is_uuid = (typia.clone as any).is_uuid;
            const $co0 = (input: any): any => ({
                items: Array.isArray(input.items)
                    ? input.items.map((elem: any) => elem as any)
                    : (input.items as any),
                minItems: Array.isArray(input.minItems)
                    ? input.minItems.map((elem: any) => elem as any)
                    : (input.minItems as any),
                maxItems: Array.isArray(input.maxItems)
                    ? input.maxItems.map((elem: any) => elem as any)
                    : (input.maxItems as any),
                both: Array.isArray(input.both)
                    ? input.both.map((elem: any) => elem as any)
                    : (input.both as any),
            });
            return Array.isArray(input)
                ? input.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $co0(elem)
                          : (elem as any),
                  )
                : (input as any);
        })(input),
);
