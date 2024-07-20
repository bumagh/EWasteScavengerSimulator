System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, ProgressBar, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, EnergyCounter;

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
      Label = _cc.Label;
      ProgressBar = _cc.ProgressBar;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ee01cuuXWdKPp3K6ZSH+XiO", "EnergyCounter", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EnergyCounter", EnergyCounter = (_dec = property({
        type: Label
      }), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: ProgressBar
      }), ccclass(_class = (_class2 = class EnergyCounter extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "timeToRecover", _descriptor, this);

          _initializerDefineProperty(this, "totalCount", _descriptor2, this);

          _initializerDefineProperty(this, "currentCount", _descriptor3, this);

          _initializerDefineProperty(this, "labelTimer", _descriptor4, this);

          _initializerDefineProperty(this, "labelCount", _descriptor5, this);

          _initializerDefineProperty(this, "progressBar", _descriptor6, this);

          this._timer = 0;
        }

        onLoad() {
          this._timer = 0;
        }

        update(dt) {
          let ratio = this._timer / this.timeToRecover;
          this.progressBar.progress = ratio;
          if (this.currentCount > this.totalCount) this.currentCount = this.totalCount;
          let timeLeft = Math.floor(this.timeToRecover - this._timer);
          this.labelCount.string = this.currentCount + '/' + this.totalCount;
          this.labelTimer.string = Math.floor(timeLeft / 60).toString() + ':' + (timeLeft % 60 < 10 ? '0' : '') + timeLeft % 60;
          this._timer += dt;

          if (this._timer >= this.timeToRecover) {
            this._timer = 0;
            this.currentCount++;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "timeToRecover", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "totalCount", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "currentCount", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelTimer", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "labelCount", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=69e36b125f5c91de20c3f1d87224bfb5b58bbb1c.js.map