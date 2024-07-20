System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, Button, tween, Input, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ButtonScaler;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      Button = _cc.Button;
      tween = _cc.tween;
      Input = _cc.Input;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aeffbvAe81PUK6yo5lqC9d9", "ButtonScaler", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec3', 'Button', 'tween', 'EventTouch', 'Input']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ButtonScaler", ButtonScaler = ccclass(_class = (_class2 = class ButtonScaler extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "scaleTo", _descriptor, this);

          _initializerDefineProperty(this, "transDuration", _descriptor2, this);

          this.initScale = new Vec3();
          this.button = null;
          this._scale = new Vec3(1, 1, 1);
          this._lastScale = new Vec3();
          this._start = new Vec3();
        }

        // use this for initialization
        onLoad() {
          var self = this;
          self.initScale = this.node.scale;
          self.button = self.getComponent(Button);
          const tweenDown = tween(this._scale);
          const tewenUp = tween(this._scale);
          this.node.getScale(this._start);
          tweenDown.to(this.transDuration, this.scaleTo, {
            easing: 'cubicInOut'
          });
          tewenUp.to(this.transDuration, this._start, {
            easing: 'cubicInOut'
          });

          this._lastScale.set(this._scale);

          function onTouchDown(event) {
            tweenDown.start();
          }

          function onTouchUp(event) {
            tweenDown.stop();
            tewenUp.start();
          }

          this.node.on(Input.EventType.TOUCH_START, onTouchDown, this);
          this.node.on(Input.EventType.TOUCH_END, onTouchUp, this);
          this.node.on(Input.EventType.TOUCH_CANCEL, onTouchUp, this);
        }

        update() {
          if (!this._scale.equals(this._lastScale)) {
            this.node.setScale(this._scale);

            this._lastScale.set(this._scale);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scaleTo", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(1.2, 1.2, 1.2);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "transDuration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.2;
        }
      })), _class2)) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=daa6cdc0a085213d99a2026d2bebd6a192fda53c.js.map