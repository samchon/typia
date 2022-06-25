import { Metadata } from "../metadata/Metadata";
import { MetadataConstant } from "../metadata/MetadataConstant";
import { MetadataObject } from "../metadata/MetadataObject";
import { IJsonApplication } from "../structures/IJsonApplication";
import { IJsonComponents } from "../structures/IJsonComponents";
import { IJsonSchema } from "../structures/IJsonSchema";
import { ArrayUtil } from "../utils/ArrayUtil";

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
                generate_schema(complemented, components, meta, undefined),
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
        description: string | undefined,
    ): IJsonSchema {
        if (meta.nullable && meta.empty()) {
            return { type: "null", description: description };
        }

        const oneOf: IJsonSchema[] = [];
        if (meta.any === true) return {};
        for (const constant of meta.constants)
            oneOf.push(generate_constant(constant, meta.nullable, description));
        for (const type of meta.atomics)
            oneOf.push(
                generate_atomic(type as "boolean", meta.nullable, description),
            );
        for (const obj of meta.objects) {
            const key: string = obj.name + (meta.nullable ? ".Nullable" : "");
            generate_object(options, components, key, obj, meta.nullable);

            const generator =
                options.purpose === "ajv" && obj.recursive
                    ? generate_recursive_pointer
                    : generate_pointer;
            oneOf.push(generator(`${options.prefix}/${key}`, description));
        }
        for (const schema of meta.arrays.values())
            oneOf.push(
                generate_array(
                    options,
                    components,
                    schema,
                    meta.nullable,
                    description,
                ),
            );
        for (const items of meta.tuples.values())
            if (options.purpose === "ajv")
                oneOf.push(
                    generate_tuple(
                        options,
                        components,
                        items,
                        meta.nullable,
                        description,
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
                        description,
                    ),
                );
            }

        if (oneOf.length === 0) return {};
        else if (oneOf.length === 1) return oneOf[0]!;
        return { oneOf };
    }

    function generate_constant(
        constant: MetadataConstant,
        nullable: boolean,
        description: string | undefined,
    ): IJsonSchema.IEnumeration {
        return {
            enum: constant.values,
            nullable,
            description,
        };
    }

    function generate_atomic<Type extends string>(
        type: Type,
        nullable: boolean,
        description: string | undefined,
    ): IJsonSchema.IAtomic<Type> {
        return {
            type,
            nullable,
            description,
        };
    }

    function generate_pointer(
        $ref: string,
        description: string | undefined,
    ): IJsonSchema.IReference {
        return {
            $ref,
            description,
        };
    }

    function generate_recursive_pointer(
        $recursiveRef: string,
        description: string | undefined,
    ): IJsonSchema.IRecursivePointer {
        return {
            $recursiveRef,
            description,
        };
    }

    function generate_array(
        options: IOptions,
        components: IJsonComponents,
        metadata: Metadata,
        nullable: boolean,
        description: string | undefined,
    ): IJsonSchema.IArray {
        return {
            type: "array",
            items: generate_schema(options, components, metadata, description),
            nullable,
            description,
        };
    }

    function generate_tuple(
        options: IOptions,
        components: IJsonComponents,
        items: Array<Metadata>,
        nullable: boolean,
        description: string | undefined,
    ): IJsonSchema.ITuple {
        return {
            type: "array",
            items: items.map((schema) =>
                generate_schema(options, components, schema, description),
            ),
            nullable,
            description,
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
            properties[property.name] = generate_schema(
                options,
                components,
                property.metadata,
                property.description,
            );
            if (property.metadata.required === true)
                required.push(property.name);
        }

        const schema: IJsonComponents.IObject = {
            $id: key,
            $recursiveAnchor:
                (options.purpose === "ajv" && obj.recursive) || undefined,
            type: "object",
            properties,
            nullable,
            required: required.length ? required : undefined,
            description: obj.description,
        };
        components.schemas[key] = schema;
    }
}

function merge_metadata(x: Metadata, y: Metadata): Metadata {
    const output: Metadata = Metadata.create({
        any: x.any || y.any,
        nullable: x.nullable || y.nullable,
        required: x.required && y.required,

        resolved:
            x.resolved !== null && y.resolved !== null
                ? merge_metadata(x.resolved, y.resolved)
                : x.resolved || y.resolved,
        atomics: [...new Set([...x.atomics, ...y.atomics])],
        constants: [...x.constants],
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
