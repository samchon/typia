import { IJsonSchema } from "../../module";
import { application_default } from "./application_default";

/**
 * @internal
 */
export const application_boolean = (props: {
    nullable: boolean;
    attribute: IJsonSchema.IAttribute;
}): IJsonSchema.IBoolean => ({
    type: "boolean",
    nullable: props.nullable,
    ...props.attribute,
    default: application_default(props.attribute)(
        (def) => def === "true" || def === "false",
    )((str) => Boolean(str)),
});
