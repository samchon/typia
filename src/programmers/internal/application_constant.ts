import { IJsonSchema } from "../../schemas/json/IJsonSchema";
import { MetadataConstant } from "../../schemas/metadata/MetadataConstant";

import { application_default } from "./application_default";

/**
 * @internal
 */
export const application_constant =
    (constant: MetadataConstant) =>
    (attribute: IJsonSchema.IAttribute): IJsonSchema.IEnumeration<any> => ({
        ...attribute,
        type: constant.type,
        enum: constant.values as any,
        default: application_default(attribute)((alias) =>
            constant.values.some((v) => v.toString() === alias),
        )(
            constant.type === "string"
                ? (str) => str
                : constant.type === "number"
                ? (str) => Number(str)
                : constant.type === "boolean"
                ? (str) => Boolean(str)
                : (str) => BigInt(str) as any,
        ),
    });
