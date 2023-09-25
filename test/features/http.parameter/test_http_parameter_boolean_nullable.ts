import typia from "../../../src";
import { TestValidator } from "../../helpers/TestValidator";

export const test_http_parameter_boolean_nullable = () => {
    const value: boolean | null = typia.http.parameter<boolean | null>("false");

    TestValidator.equals("parameter<boolean | null>(boolean)")(value)(false);
    TestValidator.equals("parameter<boolean | null>(null)")(
        typia.http.parameter<boolean | null>("null"),
    );

    TestValidator.error("parameter<boolean | null>(string)")(() =>
        typia.http.parameter<boolean | null>("one"),
    );
    TestValidator.error("parameter<boolean | null>(number)")(() =>
        typia.http.parameter<boolean | null>("3.14"),
    );
};
