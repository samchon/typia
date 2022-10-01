import { IJsonSchema } from "../../module";
import { application_default } from "./application_default";

export const application_boolean = (
    nullable: boolean,
    attribute: IJsonSchema.IAttribute,
): IJsonSchema.IBoolean => ({
    type: "boolean",
    nullable,
    ...attribute,
    default: application_default(attribute)(
        (def) => def === "true" || def === "false",
    )((str) => Boolean(str)),
});
