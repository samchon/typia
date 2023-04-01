import { Customizable } from "../typings/Customizable";

export const $dictionary = (() => {
    const glob: {
        __typia_custom_validator: Map<
            `${string}`,
            Map<
                keyof Customizable,
                (tagText: string) => (value: any) => boolean
            >
        >;
    } =
        typeof global === "object" &&
        typeof global.process === "object" &&
        typeof global.process.versions === "object" &&
        typeof global.process.versions.node !== "undefined"
            ? (global as any)
            : (window as any);
    return (glob.__typia_custom_validator ??= new Map());
})();
