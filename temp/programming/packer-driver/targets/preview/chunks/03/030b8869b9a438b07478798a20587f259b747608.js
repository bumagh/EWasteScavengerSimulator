System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, Input, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ChallengeUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfHomeUI(extras) {
    _reporterNs.report("HomeUI", "./HomeUI", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Input = _cc.Input;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6cf851wT2xK+7apBEpV2PF2", "ChallengeUI", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'EventTouch', 'Vec3', 'Input']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ChallengeUI", ChallengeUI = (_dec = ccclass("ChallengeUI"), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class ChallengeUI extends Component {
        constructor() {
          super(...arguments);
          this.home = null;

          _initializerDefineProperty(this, "roleClkArea", _descriptor, this);

          _initializerDefineProperty(this, "role", _descriptor2, this);

          this._rot = new Vec3();
        }

        start() {// Your initialization goes here.
        }

        init(home) {
          this.home = home;
          this.roleClkArea.on(Input.EventType.TOUCH_MOVE, this._rotateRole, this);

          this._rot.set(this.role.eulerAngles);
        }

        show() {
          this.node.active = true;
          this.node.emit('fade-in');
        }

        hide() {
          this.node.active = false;
          this.node.emit('fade-out');
        }

        _rotateRole(event) {
          var y = event.getDeltaX();

          if (y > 0) {
            this._rot.y += 5;
          } else if (y < 0) {
            this._rot.y -= 5;
          }

          this.role.eulerAngles = this._rot;

          this._rot.set(this.role.eulerAngles);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "roleClkArea", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "role", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=030b8869b9a438b07478798a20587f259b747608.js.map