"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountController = void 0;
const common_1 = require("@nestjs/common");
const account_service_1 = require("./account.service");
const user_dto_1 = require("../common/dto/user.dto");
let AccountController = class AccountController {
    constructor(accountService) {
        this.accountService = accountService;
    }
    signUpUser(userData) {
        return this.accountService.addAccount(userData);
    }
    getAllUser() {
        return this.accountService.getAllAccount();
    }
    getSingleUser(emailId) {
        return this.accountService.getSingleAccount(emailId);
    }
    updateUser(userData, emailId) {
        return this.accountService.updateUser(userData, emailId);
    }
    deleteUser(emailId) {
        return this.accountService.deleteAccount(emailId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.insertUserObject]),
    __metadata("design:returntype", Object)
], AccountController.prototype, "signUpUser", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AccountController.prototype, "getAllUser", null);
__decorate([
    (0, common_1.Get)(':emailId'),
    __param(0, (0, common_1.Param)('emailId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AccountController.prototype, "getSingleUser", null);
__decorate([
    (0, common_1.Patch)(':emailId'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('emailId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.insertUserObject, String]),
    __metadata("design:returntype", Object)
], AccountController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(':emailId'),
    __param(0, (0, common_1.Param)('emailId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AccountController.prototype, "deleteUser", null);
AccountController = __decorate([
    (0, common_1.Controller)('account'),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], AccountController);
exports.AccountController = AccountController;
//# sourceMappingURL=account.controller.js.map