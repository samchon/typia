import typia from "../../../src";
import { TestValidator } from "../../helpers/TestValidator";

export const test_http_parameter_string_nullable = () => {
    const value: string | null = typia.http.parameter<string | null>(
        "something",
    );

    TestValidator.equals("parameter<string | null>(string)")(value)(
        "something",
    );
    TestValidator.equals("parameter<string | null>(null)")(
        typia.http.parameter<string | null>("null"),
    );
};
