import { MetadataConstant } from "../../metadata/MetadataConstant";
import { IJsonSchema } from "../../schemas/IJsonSchema";

/**
 * @internal
 */
export const application_constant = (
    constant: MetadataConstant,
    nullable: boolean,
    attribute: IJsonSchema.IAttribute,
): IJsonSchema.IEnumeration<any> => ({
    type: constant.type,
    enum: constant.values as any,
    nullable,
    ...attribute,
});
