import typia, { IJsonApplication, IJsonComponents } from "../../../src";
import { TestValidator } from "../../helpers/TestValidator";

interface IQuery {
    required: string;
    nonRequired: string | undefined;
    optional?: string;
    none?: string | undefined;
}

export const test_issue_831_optional = () => {
    const app: IJsonApplication =
        typia.json.application<[IQuery, Partial<IQuery>, Required<IQuery>]>();
    const getter = (key: string) =>
        typia.assert<IJsonComponents.IObject>(app.components.schemas?.[key]);

    const query: IJsonComponents.IObject = getter("IQuery");
    const partial: IJsonComponents.IObject = getter("PartialIQuery");
    const required: IJsonComponents.IObject = getter("RequiredIQuery");

    validate(query)([
        ["required", true, false],
        ["nonRequired", false, false],
        ["optional", true, true],
        ["none", false, true],
    ]);
    validate(partial)([
        ["required", true, true],
        ["nonRequired", false, true],
        ["optional", true, true],
        ["none", false, true],
    ]);
    validate(required)([
        ["required", true, false],
        ["nonRequired", false, false],
        ["optional", true, false],
        ["none", false, false],
    ]);
};

const validate = (obj: IJsonComponents.IObject) => (expected: Property[]) => {
    const result: Property[] = Object.entries(obj.properties).map(
        ([key, value]) => [
            key,
            value["x-typia-required"]!,
            value["x-typia-optional"]!,
        ],
    );
    TestValidator.equals(obj.$id ?? "")(
        expected.sort((a, b) => a[0].localeCompare(b[0])),
    )(result.sort((a, b) => a[0].localeCompare(b[0])));
};

type Property = [string, boolean, boolean];
