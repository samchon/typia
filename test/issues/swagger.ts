import typia, { IJsonApplication, IJsonComponents } from "typia";

interface IQuery {
    required: string;
    nonRequired: string | undefined;
    optional?: string;
    none?: string | undefined;
}

const app: IJsonApplication = typia.json.application<[Partial<IQuery>]>();
const query: IJsonComponents.IObject = app.components.schemas
    ?.PartialIQuery as IJsonComponents.IObject;

console.log(
    Object.entries(query.properties).map(([key, value]) => [
        key,
        value["x-typia-required"],
        value["x-typia-optional"],
    ]),
);
