import typia from "../../../src";
import { TestValidator } from "../../helpers/TestValidator";

export const test_http_parameter_number_nullable = () => {
    const value: number | null = typia.http.parameter<number | null>("3.14");

    TestValidator.equals("parameter<number | null>(number)")(value)(3.14);
    TestValidator.equals("parameter<number | null>(null)")(
        typia.http.parameter<number | null>("null"),
    );

    TestValidator.error("parameter<number | null>(string)")(() =>
        typia.http.parameter<number | null>("one"),
    );
    TestValidator.error("parameter<number | null>(boolean)")(() =>
        typia.http.parameter<number | null>("false"),
    );
};
