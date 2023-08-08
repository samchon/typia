import { IJsonSchema } from "../../module";
import { application_default } from "./application_default";

/**
 * @internal
 */
export const application_boolean = (
    attribute: IJsonSchema.IAttribute,
): IJsonSchema.IBoolean => ({
    ...attribute,
    default: application_default(attribute)(
        (alias) => alias === "true" || alias === "false",
    )((str) => Boolean(str)),
    type: "boolean",
});
