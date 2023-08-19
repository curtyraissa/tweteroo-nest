"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
let AppService = exports.AppService = class AppService {
    constructor() {
        this.users = [];
    }
    getHealth() {
        return "I'm okay!";
    }
    signUp(username, avatar) {
        if (!username || typeof username !== 'string' || !avatar || typeof avatar !== 'string') {
            throw new Error('Todos os campos são obrigatórios!');
        }
        this.users.push(new user_entity_1.User(username, avatar));
    }
    authenticate(username, avatar) {
        const user = this.users.find((u) => u.username === username && u.avatar === avatar);
        return !!user;
    }
};
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map