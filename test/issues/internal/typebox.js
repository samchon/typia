function check(value) {
    return (
        (typeof value === "object" &&
            value !== null &&
            !Array.isArray(value) &&
            Object.keys(value).length === 2 &&
            typeof value.x === "number" &&
            typeof value.y === "number") ||
        (typeof value === "object" &&
            value !== null &&
            !Array.isArray(value) &&
            Object.keys(value).length === 3 &&
            typeof value.x === "number" &&
            typeof value.y === "number" &&
            typeof value.z === "number")
    );
}
