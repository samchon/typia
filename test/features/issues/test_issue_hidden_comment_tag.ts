import typia from "typia";

interface ISomething {
    /**
     * @format uuid
     */
    id: string;

    /**
     * @hidden
     */
    authority: number;
}

export const test_issue_hidden_comment_tag = () => {
    const app: typia.IJsonApplication = typia.json.application<
        [ISomething],
        "ajv"
    >();
    const object: typia.IJsonComponents.IObject = (app.components.schemas ?? {})
        .ISomething as typia.IJsonComponents.IObject;
    const keys: string[] = Object.keys(object.properties);

    if (keys.length !== 1 || keys[0] !== "id")
        throw new Error(
            "Bug on typia.application: failed to understand the hidden comment tag.",
        );
};
