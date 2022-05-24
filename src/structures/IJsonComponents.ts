import { IJsonSchema } from "./IJsonSchema";

export interface IJsonComponents
{
    schemas: IJsonComponents.ISchemas;
}
export namespace IJsonComponents
{
    export type ISchemas = Record<string, IJsonComponents.IObject>;

    export interface IObject extends IJsonSchema.IAtomic<"object">
    {
        $id: string;
        $recursiveAnchor?: boolean,
        properties: Record<string, IJsonSchema>;
        required: string[];
    }

}