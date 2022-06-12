import TSON from "../../../src";

export function test_application_object_nullable(): void {
    TSON.application<[IProduct]>();
}

interface IProduct {
    name: string;
    manufacturer: IManufacturer;
    brand: IBrand | null;
}
interface IManufacturer {
    name: string;
}
interface IBrand {
    name: string;
}
