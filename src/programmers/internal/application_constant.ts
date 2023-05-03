import { MetadataConstant } from "../../metadata/MetadataConstant";
import { IJsonSchema } from "../../schemas/IJsonSchema";

import { application_default } from "./application_default";

/**
 * @internal
 */
export const application_constant =
    (constant: MetadataConstant) =>
    (props: {
        nullable: boolean;
        attribute: IJsonSchema.IAttribute;
    }): IJsonSchema.IEnumeration<any> => ({
        type: constant.type,
        enum: constant.values as any,
        nullable: props.nullable,
        ...props.attribute,
        default: application_default(props.attribute)((def) =>
            constant.values.some((v) => v.toString() === def),
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
