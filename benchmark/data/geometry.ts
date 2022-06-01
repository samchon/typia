import { RandomGenerator } from "../internal/RandomGenerator";
import { IBox3D } from "../structures/IBox3D";
import { IPoint3D } from "../structures/IPoint3D";

export const geometry: () => IBox3D = () => ({
    scale: point(),
    position: point(),
    rotate: point(),
    pivot: point(),
});

const point: () => IPoint3D = () => ({
    x: RandomGenerator.number(),
    y: RandomGenerator.number(),
    z: RandomGenerator.number(),
});
