import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_validate_for_of } from "./_test_validate_for_of";

export const test_validate_object_nullable = _test_validate_for_of(
    "nullable object",
    ObjectNullable.generate,
    (input) => TSON.validate(input),
    // [
    //     (input) => {
    //         input.name = undefined!;
    //         return [`$input.name`];
    //     },
    //     (input) => {
    //         input.manufacturer.type = "something" as any;
    //         return [`$input.manufacturer.type`];
    //     },
    //     (input) => {
    //         input.manufacturer.name = undefined!;
    //         return [`$input.manufacturer.name`];
    //     },
    //     (input) => {
    //         input.manufacturer = [] as any;
    //         return [`$input.manufacturer.type`];
    //     },
    //     (input) => {
    //         input.brand = [] as any;
    //         return [`$input.brand.type`];
    //     },
    //     (input) => {
    //         input.brand = {
    //             type: "brand",
    //             name: undefined!,
    //         };
    //         return [`$input.brand.name`];
    //     },
    //     (input) => {
    //         input.brand = {
    //             type: "something" as "brand",
    //             name: "something",
    //         };
    //         return [`$input.brand.type`];
    //     },
    //     (input) => {
    //         input.similar = undefined!;
    //         return [`$input.similar`];
    //     },
    //     (input) => {
    //         input.similar = {
    //             type: "manufacturer",
    //             name: undefined!,
    //         };
    //         return [`$input.similar.name`];
    //     },
    //     (input) => {
    //         input.similar = [] as any;
    //         return [`$input.similar`];
    //     },
    // ],
);
