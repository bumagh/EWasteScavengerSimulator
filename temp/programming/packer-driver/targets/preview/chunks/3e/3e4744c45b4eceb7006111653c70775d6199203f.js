System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, Color, UIRenderer, _class, _class2, _descriptor, _crd, ccclass, property, PanelTransition;

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
      Color = _cc.Color;
      UIRenderer = _cc.UIRenderer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a254b2vmRVFr5nFhCR7Wwwb", "PanelTransition", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec3', 'Color', 'UIRenderer']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PanelTransition", PanelTransition = ccclass(_class = (_class2 = class PanelTransition extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "duration", _descriptor, this);

          this.outOfWorld = new Vec3();
          this._color = new Color();
        }

        // use this for initialization
        onLoad() {
          this.outOfWorld = new Vec3(3000, 0, 0);
          this.node.setPosition(this.outOfWorld); // let cbFadeOut = cc.callFunc(this.onFadeOutFinish, this);
          // let cbFadeIn = cc.callFunc(this.onFadeInFinish, this);
          // this.actionFadeIn = cc.sequence(cc.spawn(cc.fadeTo(this.duration, 255), cc.scaleTo(this.duration, 1.0)), cbFadeIn);
          // this.actionFadeOut = cc.sequence(cc.spawn(cc.fadeTo(this.duration, 0), cc.scaleTo(this.duration, 2.0)), cbFadeOut);

          this.node.on('fade-in', this.startFadeIn, this);
        }

        startFadeIn() {
          this.node.setPosition(0, 0, 0);
          this.node.setScale(2, 2, 2);
          var renderComp = this.node.getComponent(UIRenderer);

          this._color.set(renderComp.color);

          this._color.a = 0;
          renderComp.color = this._color; // this.node.runAction(this.actionFadeIn);
        }

        onFadeOutFinish() {
          this.node.setPosition(this.outOfWorld);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "duration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3e4744c45b4eceb7006111653c70775d6199203f.js.map