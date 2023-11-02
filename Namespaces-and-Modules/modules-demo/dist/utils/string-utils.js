"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeFirstLetter = void 0;
const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
exports.capitalizeFirstLetter = capitalizeFirstLetter;
