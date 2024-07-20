System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCBoolean, CCString, Component, Validator, EventManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, TouchEventProxy;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfValidator(extras) {
    _reporterNs.report("Validator", "../../../Libraries/Validator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../Libraries/EventManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCBoolean = _cc.CCBoolean;
      CCString = _cc.CCString;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Validator = _unresolved_2.Validator;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ff2e8iaPYlGF7j/GfmqQFRK", "TouchEventProxy", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'CCString', 'Component', 'EventTouch']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TouchEventProxy", TouchEventProxy = (_dec = ccclass('TouchEventProxy'), _dec2 = property(CCBoolean), _dec3 = property(CCString), _dec4 = property(CCString), _dec5 = property(CCString), _dec(_class = (_class2 = class TouchEventProxy extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "interactable", _descriptor, this);

          _initializerDefineProperty(this, "touchType", _descriptor2, this);

          _initializerDefineProperty(this, "eventName", _descriptor3, this);

          _initializerDefineProperty(this, "eventArg", _descriptor4, this);
        }

        onEnable() {
          this.node.on(this.touchType, this.OnTouchEvent, this);
        }

        onDisable() {
          this.node.off(this.touchType, this.OnTouchEvent, this);
        }

        OnTouchEvent(event) {
          if (!this.interactable) return;
          if ((_crd && Validator === void 0 ? (_reportPossibleCrUseOfValidator({
            error: Error()
          }), Validator) : Validator).IsStringIllegal(this.eventName, "this.eventName")) return;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Emit(this.eventName, this, event);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "interactable", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "touchType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "touch-end";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "eventName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "eventArg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e3633c27b77d93e9072cdd4520d2c1eb831918d4.js.map