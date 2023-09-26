import typia from "../../../src";
import { TestValidator } from "../../helpers/TestValidator";

export const test_http_createParameter_number_nullable = () => {
    const decoder = typia.http.createParameter<number | null>();
    const value: number | null = decoder("3.14");

    TestValidator.equals("parameter<number | null>(number)")(value)(3.14);
    TestValidator.equals("parameter<number | null>(null)")(decoder("null"));

    TestValidator.error("parameter<number | null>(string)")(() =>
        decoder("one"),
    );
    TestValidator.error("parameter<number | null>(boolean)")(() =>
        decoder("false"),
    );
};
