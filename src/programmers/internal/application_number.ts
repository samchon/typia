import { IJsonSchema } from "../../module";

/**
 * @internal
 */
export const application_number = (
    nullable: boolean,
    attribute: IJsonSchema.IAttribute,
): IJsonSchema.INumber => {
    const output: IJsonSchema.INumber = {
        type: "number",
        nullable,
        ...attribute,
    };
    for (const tag of attribute.metaTags || []) {
        // CHECK TYPE
        if (
            tag.kind === "type" &&
            (tag.value === "int" || tag.value === "uint")
        )
            output.type = "integer";
        // RANGE TAG
        else if (tag.kind === "minimum") output.minimum = tag.value;
        else if (tag.kind === "maximum") output.maximum = tag.value;
        else if (tag.kind === "range") {
            if (tag.minimum !== undefined)
                if (tag.minimum.include === true)
                    output.minimum = tag.minimum.value;
                else output.exclusiveMinimum = tag.minimum.value;
            if (tag.maximum !== undefined)
                if (tag.maximum.include === true)
                    output.maximum = tag.maximum.value;
                else output.exclusiveMaximum = tag.maximum.value;
        }
    }

    // WHEN UNSIGNED INT
    if (
        output.type === "integer" &&
        (attribute.metaTags || []).find(
            (tag) => tag.kind === "type" && tag.value === "uint",
        )
    )
        if (output.minimum === undefined || output.minimum < 0)
            output.minimum = 0;
        else if (
            output.exclusiveMinimum === undefined ||
            output.exclusiveMinimum < 0
        ) {
            delete output.exclusiveMinimum;
            output.maximum = 0;
        }
    return output;
};
