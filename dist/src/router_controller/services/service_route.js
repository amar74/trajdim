"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const service_controller_1 = require("./controller/service_controller");
const service_get_controller_1 = require("./controller/service_get_controller");
const services_get_unique_controller_1 = require("./controller/services_get_unique_controller");
const services_delete_controller_1 = require("./controller/services_delete_controller");
const service_edit_controller_1 = require("./controller/service_edit_controller");
const services = express_1.default.Router();
services.post("/services", auth_1.default, service_controller_1.servicesPost);
services.get("/services", auth_1.default, service_get_controller_1.servicesGetAll);
services.get("/services/:id", auth_1.default, services_get_unique_controller_1.servicesGetUnique);
services.delete("/services/:id", auth_1.default, services_delete_controller_1.servicesDelete);
services.patch("/services/:id", auth_1.default, service_edit_controller_1.servicesEdit);
exports.default = services;
//# sourceMappingURL=service_route.js.map