import { IJsDocTagInfo } from "../metadata/IJsDocTagInfo";
import { IMetadataTag } from "../metadata/IMetadataTag";
import { Metadata } from "../metadata/Metadata";
import { MetadataConstant } from "../metadata/MetadataConstant";
import { MetadataObject } from "../metadata/MetadataObject";
import { IJsonApplication } from "../schemas/IJsonApplication";
import { IJsonComponents } from "../schemas/IJsonComponents";
import { IJsonSchema } from "../schemas/IJsonSchema";

import { ArrayUtil } from "../utils/ArrayUtil";

import { template_to_pattern } from "./internal/template_to_pattern";

export namespace ApplicationProgrammer {
    export const AJV_PREFIX = "components#/schemas";
    export const SWAGGER_PREFIX = "#/components/schemas";

    export interface IOptions {
        purpose: "swagger" | "ajv";
        prefix: string;
    }
    export namespace IOptions {
        export function complement(options?: Partial<IOptions>): IOptions {
            const purpose: "swagger" | "ajv" = options?.purpose ?? "swagger";
            return {
                purpose,
                prefix: options?.prefix
                    ? options.prefix
                    : purpose === "swagger"
                    ? SWAGGER_PREFIX
                    : AJV_PREFIX,
            };
        }
    }

    export function generate(
        metadatas: Array<Metadata>,
        options?: Partial<IOptions>,
    ): IJsonApplication {
        const complemented: IOptions = IOptions.complement(options);
        const components: IJsonComponents = {
            schemas: {},
        };
        return {
            schemas: metadatas.map((meta) =>
                generate_schema(complemented, components, meta, {
                    description: undefined,
                    metaTags: undefined,
                    jsDocTags: undefined,
                }),
            ),
            components,
            ...complemented,
        };
    }

    /* -----------------------------------------------------------
        SCHEMA
    ----------------------------------------------------------- */
    function generate_schema(
        options: IOptions,
        components: IJsonComponents,
        meta: Metadata,
        attribute: IAttribute,
    ): IJsonSchema {
        if (meta.nullable && meta.empty()) {
            return { type: "null", ...attribute };
        }

        const oneOf: IJsonSchema[] = [];
        if (meta.any === true) return {};
        if (meta.templates.length)
            oneOf.push(
                generate_templates(
                    meta.templates,
                    meta.constants.find((c) => c.type === "string"),
                    meta.nullable,
                    attribute,
                ),
            );
        for (const constant of meta.constants) {
            if (constant.type === "string" && meta.templates.length) continue;
            oneOf.push(generate_constant(constant, meta.nullable, attribute));
        }
        for (const type of meta.atomics)
            oneOf.push(
                type === "string"
                    ? generate_string(meta.nullable, attribute)
                    : type === "number"
                    ? generate_number(meta.nullable, attribute)
                    : generate_atomic(
                          type as "boolean",
                          meta.nullable,
                          attribute,
                      ),
            );
        for (const obj of meta.objects) {
            const key: string = obj.name + (meta.nullable ? ".Nullable" : "");
            generate_object(options, components, key, obj, meta.nullable);

            const generator =
                options.purpose === "ajv" && obj.recursive
                    ? generate_recursive_pointer
                    : generate_pointer;
            oneOf.push(generator(`${options.prefix}/${key}`, attribute));
        }
        for (const schema of meta.arrays.values())
            oneOf.push(
                generate_array(
                    options,
                    components,
                    schema,
                    meta.nullable,
                    attribute,
                ),
            );
        for (const items of meta.tuples)
            if (options.purpose === "ajv")
                oneOf.push(
                    generate_tuple(
                        options,
                        components,
                        items,
                        meta.nullable,
                        attribute,
                    ),
                );
            else {
                const merged: Metadata = items.reduce((x, y) =>
                    merge_metadata(x, y),
                );
                oneOf.push(
                    generate_array(
                        options,
                        components,
                        merged,
                        merged?.nullable || false,
                        attribute,
                    ),
                );
            }

        if (oneOf.length === 0) return { ...attribute };
        else if (oneOf.length === 1) return oneOf[0]!;
        return { oneOf, ...attribute };
    }

    function generate_constant(
        constant: MetadataConstant,
        nullable: boolean,
        attribute: IAttribute,
    ): IJsonSchema.IEnumeration<any> {
        return {
            type: constant.type,
            enum: constant.values as any,
            nullable,
            ...attribute,
        };
    }

    function generate_atomic<Type extends string>(
        type: Type,
        nullable: boolean,
        attribute: IAttribute,
    ): IJsonSchema.IAtomic<Type> {
        return {
            type,
            nullable,
            ...attribute,
        };
    }

    function generate_number(
        nullable: boolean,
        attribute: IAttribute,
    ): IJsonSchema.INumber {
        const output: IJsonSchema.INumber = generate_atomic(
            "number",
            nullable,
            attribute,
        );
        for (const tag of attribute.metaTags || [])
            if (
                tag.kind === "type" &&
                (tag.value === "int" || tag.value === "uint")
            )
                output.type = "integer";
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
    }

    function generate_templates(
        templates: Metadata[][],
        constant: MetadataConstant | undefined,
        nullable: boolean,
        attribute: IAttribute,
    ): IJsonSchema.IString {
        const output: IJsonSchema.IString = generate_atomic(
            "string",
            nullable,
            attribute,
        );
        const patterns = templates.map((tpl) => template_to_pattern(tpl));
        if (constant) patterns.push(...(constant.values as string[]));

        output.pattern =
            "/" + patterns.map((str) => `(${str})`).join("|") + "/";
        return output;
    }

    function generate_string(
        nullable: boolean,
        attribute: IAttribute,
    ): IJsonSchema.IString {
        const output: IJsonSchema.IString = generate_atomic(
            "string",
            nullable,
            attribute,
        );
        for (const tag of attribute.metaTags || [])
            if (tag.kind === "minLength") output.minLength = tag.value;
            else if (tag.kind === "maxLength") output.maxLength = tag.value;
            else if (tag.kind === "length") {
                if (tag.minimum !== undefined)
                    output.minLength =
                        tag.minimum.value + (tag.minimum.include ? 0 : 1);
                if (tag.maximum !== undefined)
                    output.maxLength =
                        tag.maximum.value - (tag.maximum.include ? 0 : 1);
            } else if (tag.kind === "format") output.format = tag.value;
            else if (tag.kind === "pattern") output.pattern = tag.value;

        return output;
    }

    function generate_pointer(
        $ref: string,
        attribute: IAttribute,
    ): IJsonSchema.IReference {
        return {
            $ref,
            ...attribute,
        };
    }

    function generate_recursive_pointer(
        $recursiveRef: string,
        attribute: IAttribute,
    ): IJsonSchema.IRecursiveReference {
        return {
            $recursiveRef,
            ...attribute,
        };
    }

    function generate_array(
        options: IOptions,
        components: IJsonComponents,
        metadata: Metadata,
        nullable: boolean,
        attribute: IAttribute,
    ): IJsonSchema.IArray {
        const output: IJsonSchema.IArray = {
            type: "array",
            items: generate_schema(options, components, metadata, attribute),
            nullable,
            ...attribute,
        };
        for (const tag of attribute.metaTags || [])
            if (tag.kind === "minItems") output.minItems = tag.value;
            else if (tag.kind === "maxItems") output.maxItems = tag.value;
            else if (tag.kind === "items") {
                if (tag.minimum !== undefined)
                    output.minItems =
                        tag.minimum.value +
                        (tag.minimum.include === true ? 0 : 1);
                if (tag.maximum !== undefined)
                    output.maxItems =
                        tag.maximum.value -
                        (tag.maximum.include === true ? 0 : 1);
            }
        return output;
    }

    function generate_tuple(
        options: IOptions,
        components: IJsonComponents,
        items: Array<Metadata>,
        nullable: boolean,
        attribute: IAttribute,
    ): IJsonSchema.ITuple {
        return {
            type: "array",
            items: items.map((schema) =>
                generate_schema(options, components, schema, attribute),
            ),
            nullable,
            ...attribute,
        };
    }

    /* -----------------------------------------------------------
        COMPONENTS
    ----------------------------------------------------------- */
    function generate_object(
        options: IOptions,
        components: IJsonComponents,
        key: string,
        obj: MetadataObject,
        nullable: boolean,
    ): void {
        // TEMPORARY ASSIGNMENT
        if (components.schemas[key] !== undefined) return;
        components.schemas[key] = {} as any;

        // ITERATE PROPERTIES
        const properties: Record<string, any> = {};
        const required: string[] = [];

        for (const property of obj.properties) {
            if (
                property.value.functional === true &&
                property.value.nullable === false &&
                property.value.required === true &&
                property.value.size() === 0
            )
                continue;

            const key: string | null = property.key.getSoleLiteral();
            if (key === null) continue;

            properties[key] = generate_schema(
                options,
                components,
                property.value,
                {
                    description: property.description,
                    metaTags: property.tags.length ? property.tags : undefined,
                    jsDocTags: property.jsDocTags.length
                        ? property.jsDocTags
                        : undefined,
                },
            );
            if (property.value.required === true) required.push(key);
        }

        const schema: IJsonComponents.IObject = {
            $id:
                options.purpose === "ajv"
                    ? options.prefix + "/" + key
                    : undefined,
            $recursiveAnchor:
                (options.purpose === "ajv" && obj.recursive) || undefined,
            type: "object",
            properties,
            nullable,
            required: required.length ? required : undefined,
            description: obj.description,
            jsDocTags: obj.jsDocTags,
        };
        components.schemas[key] = schema;
    }
}

function merge_metadata(x: Metadata, y: Metadata): Metadata {
    const output: Metadata = Metadata.create({
        any: x.any || y.any,
        nullable: x.nullable || y.nullable,
        required: x.required && y.required,
        functional: x.functional || y.functional,

        resolved:
            x.resolved !== null && y.resolved !== null
                ? merge_metadata(x.resolved, y.resolved)
                : x.resolved || y.resolved,
        atomics: [...new Set([...x.atomics, ...y.atomics])],
        constants: [...x.constants],
        templates: x.templates.slice(),
        arrays: x.arrays.slice(),
        tuples: x.tuples.slice(),
        objects: x.objects.slice(),
    });
    for (const constant of y.constants) {
        const target: MetadataConstant = ArrayUtil.take(
            output.constants,
            (elem) => elem.type === constant.type,
            () => ({
                type: constant.type,
                values: [],
            }),
        );
        for (const value of constant.values)
            ArrayUtil.add(target.values, value);
    }
    for (const array of y.arrays)
        ArrayUtil.set(output.arrays, array, (elem) => elem.getName());
    for (const obj of y.objects)
        ArrayUtil.set(output.objects, obj, (elem) => elem.name);
    return output;
}

interface IAttribute {
    description: string | undefined;
    metaTags: IMetadataTag[] | undefined;
    jsDocTags: IJsDocTagInfo[] | undefined;
}
