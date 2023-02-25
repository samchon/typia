import typia from "../../../../src";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ObjectDynamic = _test_clone(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) =>
        ((input: ObjectDynamic): typia.Primitive<ObjectDynamic> => {
            const $join = (typia.clone as any).join;
            const $co0 = (input: any): any => {
                const output = {} as any;
                for (const [key, value] of Object.entries(input)) {
                    if (RegExp(/(.*)/).test(key)) {
                        output[key] = value as any;
                        continue;
                    }
                }
                return output;
            };
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        })(input),
);
