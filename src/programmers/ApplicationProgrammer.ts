import { Metadata } from "../metadata/Metadata";
import { IJsonApplication } from "../schemas/IJsonApplication";
import { IJsonComponents } from "../schemas/IJsonComponents";
import { IJsonSchema } from "../schemas/IJsonSchema";

import { application_schema } from "./internal/application_schema";

export namespace ApplicationProgrammer {
    export const AJV_PREFIX = "components#/schemas";
    export const SWAGGER_PREFIX = "#/components/schemas";

    export interface IOptions {
        purpose: "swagger" | "ajv";
        prefix: string;
    }

    /**
     * @internal
     */
    export namespace IOptions {
        export function complement(options?: Partial<IOptions>): IOptions {
            const purpose: "swagger" | "ajv" = options?.purpose ?? "swagger";
            return {
                purpose,
                prefix:
                    options?.prefix ||
                    (purpose === "swagger" ? SWAGGER_PREFIX : AJV_PREFIX),
            };
        }
    }

    export function generate(
        metadatas: Array<Metadata>,
        options?: Partial<IOptions>,
    ): IJsonApplication {
        const fullOptions: IOptions = IOptions.complement(options);
        const components: IJsonComponents = {
            schemas: {},
        };
        const generator = application_schema(fullOptions)(components)(true);

        return {
            schemas: metadatas.map((meta, i) => {
                const schema: IJsonSchema | null = generator(meta, {});
                if (schema === null)
                    throw new Error(
                        `Error on typia.application(): invalid type on argument - (${meta.getName()}, ${i})`,
                    );
                return schema;
            }),
            components,
            ...fullOptions,
        };
    }
}
