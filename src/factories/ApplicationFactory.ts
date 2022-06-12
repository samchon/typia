import { IJsonApplication } from "../structures/IJsonApplication";
import { IJsonComponents } from "../structures/IJsonComponents";
import { IJsonSchema } from "../structures/IJsonSchema";
import { IMetadata } from "../structures/IMetadata";

export namespace ApplicationFactory {
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
                prefix:
                    options?.prefix ?? purpose === "swagger"
                        ? SWAGGER_PREFIX
                        : AJV_PREFIX,
            };
        }
    }

    export function generate(
        metadatas: Array<IMetadata | null>,
        options?: Partial<IOptions>,
    ): IJsonApplication {
        const complemented: IOptions = IOptions.complement(options);
        const components: IJsonComponents = {
            schemas: {},
        };

        return {
            schemas: metadatas.map((meta) =>
                generate_schema(complemented, components, meta),
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
        meta: IMetadata | null,
    ): IJsonSchema {
        if (meta === null) return {};
        else if (meta.nullable && IMetadata.empty(meta))
            return { type: "null" };

        const oneOf: IJsonSchema[] = [];
        if (meta.constants.size)
            oneOf.push(
                ...generate_constants(
                    meta.constants,
                    meta.nullable,
                    meta.description,
                ),
            );
        for (const type of meta.atomics)
            oneOf.push(
                generate_atomic(
                    type as "boolean",
                    meta.nullable,
                    meta.description,
                ),
            );
        for (const [address, [obj, nullable]] of meta.objects.entries()) {
            const key: string = address + (nullable ? ".Nullable" : "");
            generate_object(options, components, key, obj, nullable);

            const generator =
                options.purpose === "ajv" && obj.recursive
                    ? generate_recursive_pointer
                    : generate_pointer;
            oneOf.push(generator(`${options.prefix}/${key}`, meta.description));
        }
        for (const schema of meta.arraies.values())
            oneOf.push(
                generate_array(
                    options,
                    components,
                    schema,
                    meta.nullable,
                    meta.description,
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
                        meta.description,
                    ),
                );
            else {
                const merged: IMetadata | null = items.reduce(
                    (x, y) => IMetadata.merge(x, y),
                    IMetadata.create(),
                );
                oneOf.push(
                    generate_array(
                        options,
                        components,
                        merged,
                        merged?.nullable || false,
                        items[0]?.description,
                    ),
                );
            }

        if (oneOf.length === 0) return {};
        else if (oneOf.length === 1) return oneOf[0]!;
        else return { oneOf };
    }

    function generate_constants(
        dict: Map<string, Set<string | number | bigint | boolean>>,
        nullable: boolean,
        description: string | undefined,
    ) {
        return [...dict].map(([key, values]) => ({
            type: key,
            enum: [...values],
            nullable,
            description,
        }));
    }

    function generate_atomic(
        type: "boolean" | "number" | "bigint" | "string",
        nullable: boolean,
        description: string | undefined,
    ) {
        return {
            type,
            nullable,
            description,
        };
    }

    function generate_pointer(
        $ref: string,
        description: string | undefined,
    ): IJsonSchema.IPointer {
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
        metadata: IMetadata | null,
        nullable: boolean,
        description: string | undefined,
    ): IJsonSchema.IArray {
        return {
            type: "array",
            items: generate_schema(options, components, metadata),
            nullable,
            description,
        };
    }

    function generate_tuple(
        options: IOptions,
        components: IJsonComponents,
        items: Array<IMetadata | null>,
        nullable: boolean,
        description: string | undefined,
    ): IJsonSchema.ITuple {
        return {
            type: "array",
            items: items.map((schema) =>
                generate_schema(options, components, schema),
            ),
            nullable,
            description,
        };
    }

    /* -----------------------------------------------------------
        COMPONENTS
    ----------------------------------------------------------- */
    // export function components(
    //     storage: IMetadata.IStorage | null,
    //     options?: Partial<IOptions>,
    // ): IJsonComponents {
    //     const complemented: IOptions = IOptions.complement(options);
    //     return generate_components(complemented, storage);
    // }

    // function generate_components(
    //     options: IOptions,
    //     storage: IMetadata.IStorage | null,
    //     nullable: boolean
    // ): IJsonComponents {
    //     const schemas: Record<string, any> = {};
    //     for (const [key, obj] of Object.entries(storage || []))
    //         schemas[key + nullable ? ".Nullable" : ""] = generate_object(
    //             options,
    //             obj,
    //             nullable,
    //         );

    //     return { schemas };
    // }

    function generate_object(
        options: IOptions,
        components: IJsonComponents,
        key: string,
        obj: IMetadata.IObject,
        nullable: boolean,
    ): void {
        // TEMPORARY ASSIGNMENT
        if (components.schemas[key] !== undefined) return;
        components.schemas[key] = {} as any;

        // ITERATE PROPERTIES
        const properties: Record<string, any> = {};
        const required: string[] = [];

        for (const [key, value] of Object.entries(obj.properties || [])) {
            properties[key] = generate_schema(options, components, value);
            if (value?.required === true) required.push(key);
        }

        const schema: IJsonComponents.IObject = {
            $id: options.purpose === "ajv" ? obj.$id : undefined,
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
