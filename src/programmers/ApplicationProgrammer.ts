import { Metadata } from "../metadata/Metadata";
import { IJsonApplication } from "../schemas/IJsonApplication";
import { IJsonComponents } from "../schemas/IJsonComponents";
import { IJsonSchema } from "../schemas/IJsonSchema";

import { application_schema } from "./internal/application_schema";

export namespace ApplicationProgrammer {
    export interface IOptions {
        purpose: "ajv" | "swagger";
    }

    /**
     * @internal
     */
    export namespace IOptions {
        export const complement = (options?: Partial<IOptions>): IOptions => {
            const purpose: "swagger" | "ajv" = options?.purpose ?? "swagger";
            return {
                purpose,
            };
        };
    }

    /**
     * @deprecated Use `write()` function instead
     */
    export const generate = (
        metadatas: Array<Metadata>,
        options?: Partial<IOptions>,
    ): IJsonApplication => write(options)(metadatas);

    export const write =
        (options?: Partial<IOptions>) =>
        (metadatas: Array<Metadata>): IJsonApplication => {
            const fullOptions: IOptions = IOptions.complement(options);
            const components: IJsonComponents = {
                schemas: {},
            };
            const generator = application_schema(fullOptions)(true)(components);

            return {
                schemas: metadatas.map((meta, i) => {
                    const schema: IJsonSchema | null = generator(meta)({});
                    if (schema === null)
                        throw new Error(
                            `Error on typia.application(): invalid type on argument - (${meta.getName()}, ${i})`,
                        );
                    return schema;
                }),
                components,
                ...fullOptions,
            };
        };
}
