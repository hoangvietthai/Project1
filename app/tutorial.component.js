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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TutorialComponent = /** @class */ (function () {
    function TutorialComponent() {
        this.onVote = new core_1.EventEmitter();
        this.cone = true;
        this.ctwo = true;
        this.voted = false;
    }
    TutorialComponent.prototype.toggle = function () {
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    };
    ;
    TutorialComponent.prototype.setName = function (name) {
        this.name = name;
    };
    TutorialComponent.prototype.vote = function (agree) {
        this.voted = true;
        this.onVote.emit({ agree: agree, abc: 1 });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TutorialComponent.prototype, "name", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TutorialComponent.prototype, "onVote", void 0);
    TutorialComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorial',
            template: "\n   <p [ngClass]=\"{classOne: cone,classTwo: ctwo}\">My name is Thai </p>\n   <button (click)=\"toggle()\">Toggle</button>\n   <p>Child component: {{name}}</p>\n   <button [disabled]=\"voted\" (click)=vote(true)>Agree</button>\n   <button [disabled]=\"voted\" (click)=vote(false)>Disagree</button>\n   \n   ",
            styles: [
                "\n       .classOne {\n            color: yellow;\n       } \n       .classTwo {\n           background-color: black;\n       }\n       "
            ]
        })
    ], TutorialComponent);
    return TutorialComponent;
}());
exports.TutorialComponent = TutorialComponent;
//# sourceMappingURL=tutorial.component.js.map