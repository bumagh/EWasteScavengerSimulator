System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec2, Vec3, Animation, Input, input, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, TOUCH_RADIUS, ROLE_MOVE_FRAME, _tempPos, _tempDelta, Horizontal, MOVE_DELTA, RockerCtrl;

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
      Node = _cc.Node;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      Animation = _cc.Animation;
      Input = _cc.Input;
      input = _cc.input;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "03934dWrlVKLJIbpPCFClz3", "rockerCtrl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec2', 'Vec3', 'Animation', 'Input', 'input', 'EventTouch']);

      ({
        ccclass,
        property
      } = _decorator); // 操作半径

      TOUCH_RADIUS = 400;
      ROLE_MOVE_FRAME = 0.2;
      _tempPos = new Vec3();
      _tempDelta = new Vec2();
      Horizontal = new Vec2(1, 0);
      MOVE_DELTA = 0.2;

      _export("RockerCtrl", RockerCtrl = (_dec = ccclass("RockerCtrl"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Vec3), _dec(_class = (_class2 = class RockerCtrl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ctrlSprite", _descriptor, this);

          _initializerDefineProperty(this, "role", _descriptor2, this);

          _initializerDefineProperty(this, "originPos", _descriptor3, this);

          this._isTouch = false;
          this._touchPos = new Vec2();
          this._startPos = new Vec2();
          this._movePos = new Vec2();
          this._animComp = null;
          this._animState = 'idle';
        }

        start() {
          this.ctrlSprite.setPosition(this.originPos);

          _tempPos.set(0, 90, 0);

          this.role.eulerAngles = _tempPos;
          this._animComp = this.role.getComponentInChildren(Animation);
          input.on(Input.EventType.TOUCH_START, this.touchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.touchMove, this);
          input.on(Input.EventType.TOUCH_END, this.touchEnd, this);
        }

        onDestroy() {
          input.off(Input.EventType.TOUCH_START, this.touchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.touchMove, this);
          input.off(Input.EventType.TOUCH_END, this.touchEnd, this);
        }

        touchStart(touch) {
          this.changeState('cocos_anim_run');
          touch.getUILocation(this._startPos);

          const distance = this._startPos.length();

          if (distance < TOUCH_RADIUS) {
            this._touchPos.set(this._startPos);

            this._movePos.set(this._startPos);

            _tempPos.set(this.ctrlSprite.position);

            this.ctrlSprite.setWorldPosition(this._startPos.x, this._startPos.y, _tempPos.z);
            this._isTouch = true;
          }
        }

        touchMove(touch) {
          if (!this._isTouch) {
            return;
          }

          touch.getUILocation(this._movePos);
          Vec2.subtract(_tempDelta, this._movePos, this._touchPos); // 计算角色的整体旋转值

          const deltaRadian = _tempDelta.angle(Horizontal);

          const angle = deltaRadian * 180 / Math.PI;
          const rot = this.role.eulerAngles;

          _tempPos.set(rot.x, 90 + Math.sign(_tempDelta.y) * angle, rot.z);

          this.role.eulerAngles = _tempPos; // 重新规划移动方向值

          _tempDelta.multiply2f(MOVE_DELTA, MOVE_DELTA);

          Vec2.add(this._movePos, this._startPos, _tempDelta);

          const distance = this._movePos.length(); // 是否超出限制半径


          if (distance > TOUCH_RADIUS) {
            const radian = this._movePos.angle(Horizontal);

            const x = Math.cos(radian) * TOUCH_RADIUS;
            const y = Math.sin(radian) * TOUCH_RADIUS;

            this._movePos.set(x, y);
          }

          this.ctrlSprite.setWorldPosition(this._movePos.x, this._movePos.y, 0);

          this._touchPos.set(this._movePos);
        }

        touchEnd(touch) {
          this._isTouch = false;
          this.changeState('cocos_anim_idle');
          this.ctrlSprite.setPosition(this.originPos);
        }

        changeState(name) {
          if (this._animState === name) {
            return;
          }

          this._animComp.play(name);

          this._animState = name;
        }

        update() {
          if (!this._isTouch) {
            return;
          }

          _tempPos.set(0, 0, ROLE_MOVE_FRAME);

          this.role.translate(_tempPos);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ctrlSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "role", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "originPos", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a448f62f362794db00ad0ccde5a23c834d98ecb2.js.map